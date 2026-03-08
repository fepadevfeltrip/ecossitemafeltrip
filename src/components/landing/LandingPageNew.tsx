import { HeroSection } from "./HeroSection";
import { PartnerLogos } from "./PartnerLogos";
import { PersonaCards } from "./PersonaCards";
import { HowItWorks } from "./HowItWorks";
import { SocialProofSection } from "./SocialProofSection";
import { FinalCTA } from "./FinalCTA";
import { CommunityBanner } from "@/components/CommunityBanner";

export const LandingPageNew = () => {
  return (
    <main role="main">
      <HeroSection />
      <PartnerLogos />
      <PersonaCards />
      <HowItWorks />
      <SocialProofSection />
      <FinalCTA />
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <CommunityBanner />
        </div>
      </section>
    </main>
  );
};
