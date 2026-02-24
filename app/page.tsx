import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-12";
import { CompareSection } from "@/components/compare-section";
import { ReviewsSection } from "@/components/reviews-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ReviewsSection />
      <CompareSection />
    </div>
  );
}
