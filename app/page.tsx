import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-12";
import { ReviewsSection } from "@/components/reviews-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ReviewsSection />
    </div>
  );
}
