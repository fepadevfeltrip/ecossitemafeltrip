import { MainLayout } from "@/components/layout/MainLayout";
import { LandingPageNew } from "@/components/landing/LandingPageNew";
import { PricingTable } from "@/components/PricingTable";
import { SuggestionBox } from "@/components/SuggestionBox";

const Index = () => {
  return (
    <MainLayout>
      <LandingPageNew />
      
      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-muted/30" id="planos">
        <div className="container px-4">
          <PricingTable />
        </div>
      </section>

      {/* Suggestion Box */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <SuggestionBox />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
