import { Link } from "react-router-dom";
import { Mail, Globe, MessageCircle } from "lucide-react";
import feltripLogoTrans from "@/assets/feltrip-logo-trans.png";
import { useLanguage } from "@/hooks/useLanguage";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

export const SiteFooter = () => {
  const { t } = useLanguage();

  const solutionsLinks = [
    { label: t("Integração Intercultural", "Intercultural Integration"), href: "/integracao-intercultural" },
    { label: t("Mobilidade Global", "Global Mobility"), href: "/mobilidade-global" },
    { label: t("Onboarding Cultural", "Cultural Onboarding"), href: "/onboarding-cultural" },
    { label: t("Hospitalidade Intercultural", "Intercultural Hospitality"), href: "/hospitalidade-intercultural" },
    { label: t("Ecossistema Relacional", "Relational Ecosystem"), href: "/ecossistema-relacional" },
  ];

  const publicLinks = [
    { label: t("Estrangeiros no Brasil", "Foreigners in Brazil"), href: "/estrangeiros-no-brasil" },
    { label: t("Imigrantes no Brasil", "Immigrants in Brazil"), href: "/imigrantes-no-brasil" },
    { label: t("Integração de Migrantes", "Migrant Integration"), href: "/integracao-de-migrantes" },
  ];

  const companyLinks = [
    { label: t("Quem somos", "About Us"), href: "/quem-somos" },
    { label: t("Conteúdos", "Content"), href: "/conteudos" },
    { label: t("Guia Cultural", "Culture Guide"), href: "https://cultureguide.feltrip.com", external: true },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={feltripLogoTrans} 
              alt="Feltrip" 
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "Integração intercultural, mobilidade global e hospitalidade para pessoas, empresas e cidades.",
                "Intercultural integration, global mobility and hospitality for people, companies and cities."
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("O primeiro ecossistema relacional do Brasil.", "Brazil's first relational ecosystem.")}
            </p>
          </div>

          {/* Soluções */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              {t("Soluções", "Solutions")}
            </h4>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Público */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              {t("Recursos", "Resources")}
            </h4>
            <ul className="space-y-2">
              {publicLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              {t("Contato", "Contact")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@feltrip.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@feltrip.com
                </a>
              </li>
              <li>
                <a 
                  href="https://feltrip.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  feltrip.com
                </a>
              </li>
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Feltrip. {t("Todos os direitos reservados.", "All rights reserved.")}
            </p>
            {/* Hidden SEO keywords */}
            <p className="sr-only">
              Integração intercultural, mobilidade global, onboarding cultural, hospitalidade intercultural, 
              estrangeiros no Brasil, imigrantes no Brasil, adaptação cultural, treinamento intercultural,
              ecossistema relacional, infraestrutura relacional, integração relacional, cross-cultural training,
              global mobility HR, cultural orientation, expatriates Brazil, expat support.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
