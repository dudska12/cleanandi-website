import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { PlacesSection } from "@/components/sections/PlacesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ServicesSection />
        <PlacesSection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
