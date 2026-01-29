import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import feltripLogoTrans from "@/assets/feltrip-logo-trans.png";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const WHATSAPP_LINK = "https://wa.me/message/BG24GCPKNF6KG1";

export const SiteHeader = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: t("Para você", "For You"), href: "/para-voce", isPage: true },
    { label: t("Para sua empresa", "For Companies"), href: "/para-empresa", isPage: true },
    { label: t("Quem somos", "About Us"), href: "/quem-somos", isPage: true },
    { label: t("Newsletter", "Newsletter"), href: "https://thebobamanifesto.substack.com", isExternal: true },
    { label: t("Seja parceiro", "Become a Partner"), href: WHATSAPP_LINK, isExternal: true },
  ];

  const solutionsItems = [
    { label: t("Integração Intercultural", "Intercultural Integration"), href: "/integracao-intercultural" },
    { label: t("Mobilidade Global", "Global Mobility"), href: "/mobilidade-global" },
    { label: t("Onboarding Cultural", "Cultural Onboarding"), href: "/onboarding-cultural" },
    { label: t("Hospitalidade Intercultural", "Intercultural Hospitality"), href: "/hospitalidade-intercultural" },
    { label: t("Ecossistema Feltrip", "Feltrip Ecosystem"), href: "/ecossistema-relacional" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={feltripLogoTrans} 
            alt="Feltrip - Integração intercultural e mobilidade global" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Soluções dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium bg-transparent hover:bg-muted/50">
                  {t("Soluções", "Solutions")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4">
                    {solutionsItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(item.href) && "bg-accent/50"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{item.label}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href) 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Language Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex gap-1">
            <Button
              variant={language === "pt" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("pt")}
              className="h-8 px-2 text-xs"
            >
              PT
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className="h-8 px-2 text-xs"
            >
              EN
            </Button>
          </div>
          <Button 
            size="sm" 
            className="bg-energy hover:bg-energy/90"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            {t("Falar agora", "Talk now")}
          </Button>
        </div>

        {/* Mobile Language Toggle + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex gap-1">
            <Button
              variant={language === "pt" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("pt")}
              className="h-8 px-2 text-xs"
            >
              PT
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className="h-8 px-2 text-xs"
            >
              EN
            </Button>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {/* Soluções section */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {t("Soluções", "Solutions")}
                </p>
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-2 px-3 rounded-md text-sm transition-colors",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <hr className="border-border" />

              {/* Main nav items */}
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 rounded-md text-sm hover:bg-muted"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-2 px-3 rounded-md text-sm transition-colors",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}

              <hr className="border-border" />

              <Button 
                className="w-full bg-energy hover:bg-energy/90 mt-2"
                onClick={() => {
                  window.open(WHATSAPP_LINK, "_blank");
                  setIsOpen(false);
                }}
              >
                {t("Falar agora", "Talk now")}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      </div>
    </header>
  );
};
