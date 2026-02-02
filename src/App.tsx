import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParaVoce from "./pages/ParaVoce";
import ParaEmpresa from "./pages/ParaEmpresa";
import QuemSomos from "./pages/QuemSomos";
import Conteudos from "./pages/Conteudos";
import IntegracaoIntercultural from "./pages/IntegracaoIntercultural";
import MobilidadeGlobal from "./pages/MobilidadeGlobal";
import OnboardingCultural from "./pages/OnboardingCultural";
import EstrangeirosNoBrasil from "./pages/EstrangeirosNoBrasil";
import ImigrantesNoBrasil from "./pages/ImigrantesNoBrasil";
import IntegracaoDeMigrantes from "./pages/IntegracaoDeMigrantes";
import HospitalidadeIntercultural from "./pages/HospitalidadeIntercultural";
import EcossistemaRelacional from "./pages/EcossistemaRelacional";
import NossaMetodologia from "./pages/NossaMetodologia";
import AdminInvites from "./pages/AdminInvites";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/hooks/useLanguage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={0}>
        <LanguageProvider>
          <BrowserRouter>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/para-voce" element={<ParaVoce />} />
              <Route path="/para-empresa" element={<ParaEmpresa />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/conteudos" element={<Conteudos />} />
              <Route path="/integracao-intercultural" element={<IntegracaoIntercultural />} />
              <Route path="/mobilidade-global" element={<MobilidadeGlobal />} />
              <Route path="/onboarding-cultural" element={<OnboardingCultural />} />
              <Route path="/estrangeiros-no-brasil" element={<EstrangeirosNoBrasil />} />
              <Route path="/imigrantes-no-brasil" element={<ImigrantesNoBrasil />} />
              <Route path="/integracao-de-migrantes" element={<IntegracaoDeMigrantes />} />
              <Route path="/hospitalidade-intercultural" element={<HospitalidadeIntercultural />} />
              <Route path="/ecossistema-relacional" element={<EcossistemaRelacional />} />
              <Route path="/nossa-metodologia" element={<NossaMetodologia />} />
              <Route path="/admin/invites" element={<AdminInvites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
