import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-12";
import { CompareSection } from "@/components/compare-section";
import { ReviewsSection } from "@/components/reviews-section";
import ActionSection from "@/components/action-section";
import Pricing from "@/components/pricing";
import FAQsTwo from "@/components/faqs-2";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ReviewsSection />
      <CompareSection />
      <ActionSection />
      <Pricing />
      <FAQsTwo />
      <Footer />
    </div>
  );
}
