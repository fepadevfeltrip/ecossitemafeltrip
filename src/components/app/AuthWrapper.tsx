import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [validatingCode, setValidatingCode] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Login realizado com sucesso!");
      } else {
        // Validar código de convite usando função segura (não expõe email)
        setValidatingCode(true);
        
        const { data: validationResult, error: validationError } = await supabase
          .rpc('validate_invite_code', { invite_code: inviteCode.trim() }) as { 
            data: { valid: boolean; message?: string; invite_id?: string } | null; 
            error: any 
          };

        if (validationError) {
          setValidatingCode(false);
          toast.error("Erro ao validar código de convite.");
          return;
        }

        if (!validationResult?.valid) {
          setValidatingCode(false);
          toast.error("Código de convite inválido ou expirado.");
          return;
        }

        setValidatingCode(false);

        const { data: authData, error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`
          }
        });
        
        if (error) throw error;

        // Resgatar convite usando função segura
        if (authData.user) {
          const { data: redeemResult, error: redeemError } = await supabase
            .rpc('redeem_invite', { 
              invite_code: inviteCode.trim(), 
              redeeming_user_id: authData.user.id 
            });

          if (redeemError) {
            console.error("Erro ao resgatar convite:", redeemError);
          }
        }

        toast.success("Conta criada com sucesso!");
      }
    } catch (error: any) {
      toast.error(error.message);
      setValidatingCode(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 p-4">
        <Card className="w-full max-w-md p-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">
              {isLogin ? "Entrar" : "Criar Conta"}
            </h2>
            <p className="text-muted-foreground">
              {isLogin ? "Entre para acessar seus pins" : "Crie uma conta para começar"}
            </p>
          </div>
          
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!isLogin && (
              <div>
                <Input
                  type="text"
                  placeholder="Código de Convite"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Digite o código de convite que você recebeu
                </p>
              </div>
            )}
            <Button type="submit" className="w-full" disabled={validatingCode}>
              {validatingCode ? "Validando..." : isLogin ? "Entrar" : "Criar Conta"}
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? "Não tem uma conta? Criar conta" : "Já tem uma conta? Entrar"}
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};
