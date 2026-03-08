import { useLanguage } from "@/hooks/useLanguage";
import koinzCapitalLogo from "@/assets/koinz-capital-logo.png";
import coletivaDelasLogo from "@/assets/coletiva-delas-logo.png";
import justicaGlobalLogo from "@/assets/justica-global-logo.png";
import nomadWorldLogo from "@/assets/nomad-world-logo.png";

const logos = [
  { src: koinzCapitalLogo, alt: "Koinz Capital" },
  { src: coletivaDelasLogo, alt: "Coletiva Delas" },
  { src: justicaGlobalLogo, alt: "Justiça Global" },
  { src: nomadWorldLogo, alt: "Nomad World" },
];

export const PartnerLogos = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 border-y border-border/30 bg-muted/20">
      <div className="container px-4">
        <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
          {t("Quem já confia na Feltrip", "Who already trusts Feltrip")}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
