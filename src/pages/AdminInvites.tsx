import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Copy, Mail, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Invite {
  id: string;
  email: string;
  code: string;
  status: string;
  created_at: string;
  expires_at: string;
  used_at: string | null;
}

export default function AdminInvites() {
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("Você precisa estar logado");
        navigate("/");
        return;
      }

      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .single();

      if (!roles) {
        toast.error("Acesso negado. Apenas administradores podem acessar esta página.");
        navigate("/");
        return;
      }

      setIsAdmin(true);
      loadInvites();
    } catch (error) {
      console.error("Erro ao verificar acesso:", error);
      navigate("/");
    }
  };

  const loadInvites = async () => {
    try {
      const { data, error } = await supabase
        .from('invites')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInvites(data || []);
    } catch (error: any) {
      toast.error("Erro ao carregar convites: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const generateInviteCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const createInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const code = generateInviteCode();
      
      const { error } = await supabase
        .from('invites')
        .insert({
          email: email.toLowerCase(),
          code,
          created_by: user.id
        });

      if (error) throw error;

      toast.success(`Convite criado! Código: ${code}`);
      setEmail("");
      loadInvites();
    } catch (error: any) {
      toast.error("Erro ao criar convite: " + error.message);
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Código copiado!");
  };

  const deleteInvite = async (id: string) => {
    try {
      const { error } = await supabase
        .from('invites')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success("Convite excluído");
      loadInvites();
    } catch (error: any) {
      toast.error("Erro ao excluir: " + error.message);
    }
  };

  if (loading || !isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 p-4">
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gerenciar Convites</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Voltar ao Site
          </Button>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Criar Novo Convite</h2>
          <form onSubmit={createInvite} className="flex gap-4">
            <Input
              type="email"
              placeholder="Email do convidado"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">
              <Mail className="w-4 h-4 mr-2" />
              Criar Convite
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Convites Existentes</h2>
          <div className="space-y-4">
            {invites.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                Nenhum convite criado ainda
              </p>
            ) : (
              invites.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium">{invite.email}</p>
                    <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                      <span>Código: <strong className="text-foreground">{invite.code}</strong></span>
                      <span className={
                        invite.status === 'used' 
                          ? 'text-green-600' 
                          : invite.status === 'expired' 
                          ? 'text-red-600' 
                          : 'text-yellow-600'
                      }>
                        Status: {invite.status === 'pending' ? 'Pendente' : invite.status === 'used' ? 'Usado' : 'Expirado'}
                      </span>
                      <span>
                        Expira em: {new Date(invite.expires_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyCode(invite.code)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    {invite.status === 'pending' && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteInvite(invite.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
