import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { CompareDemo } from "./compare-demo";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Sparkles,
  Palette,
  Zap,
  DollarSign,
  Users,
  MessageCircle,
  RefreshCw,
  Library,
  Award,
  ShieldCheck,
  PlusIcon,
  RefreshCcw,
} from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        {/* bg-gradient-to-br from-[#E8E0F5] via-[#F0E5F5] to-[#F5D5E8] */}
        <section className="relative">
          <div className="pb-24 pt-10 md:pb-22 lg:pt-24">
            <div className="relative mx-auto flex max-w-5xl flex-col lg:flex-row gap-12 px-6 items-center lg:items-start">
              {/* Left Content */}
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <div className="text-foreground">
                  <div className="inline-flex items-center gap-2 px-4 py-2 shadow-sm border rounded-full bg-card w-fit">
                    <div className="p-2 rounded-full bg-background text-primary">
                      <Sparkles className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="font-medium text-[14px] leading-[20px]">
                      <span className="font-semibold text-foreground">
                        50,000+
                      </span>{" "}
                      X profiles optimized
                    </span>
                  </div>
                  <p className="mt-4 font-semibold text-foreground text-[16px] leading-[24px]">
                    The first Brand-Aware AI Headshot Generator for X
                  </p>
                </div>
                <h1 className="mt-4 max-w-2xl text-foreground text-[1rem] font-semibold md:text-[31px] font-bricolage lg:mt-16 leading-[2.25rem]">
                  Your Profile Picture Decides Your{" "}
                  <span className="text-primary">X Reach</span>
                </h1>
                <p className="mt-6 max-w-2xl leading-[28px] text-muted-foreground text-[18px] font-semibold">
                  We study your X identity + behavior to generate
                  reach-optimized headshots, professional bios, and high-impact
                  pinned posts.
                </p>

                {/* Feature List */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-[14px] leading-[20px] text-foreground">
                      Context-Aware AI Headshots
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      Reach-Optimized Bio Rewrite
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      High-Engagement Pin Post
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      Professional Brand Analysis
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex font-sans flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="px-8 py-6 text-[16px] leading-[24px] rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all text-white"
                  >
                    <Link href="#link" className="flex items-center gap-2">
                      <span className="text-nowrap text-[14px] font-semibold leading-[20px]">Analyze My X Profile</span>
                      <Sparkles className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-[16px] leading-[24px] rounded-full bg-card border-border text-foreground hover:bg-muted"
                  >
                    <Link href="#link" className="flex items-center gap-2">
                      <span className="text-nowrap text-[14px] font-semibold leading-[20px]">View Showcase</span>
                      <Palette className="w-4 h-4 text-primary" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="flex items-center gap-1">
                      <span className="text-green-600 font-bold text-lg">
                        ★
                      </span>
                      <span className="font-semibold font-bricolage">
                        Trustpilot
                      </span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-green-500 flex items-center justify-center"
                        >
                          <span className="text-white text-xs">★</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">TrustScore 4.7</span>{" "}
                    <span className="underline">997 reviews</span>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start pt-4">
                    <span className="text-sm text-muted-foreground">
                      As seen on:
                    </span>
                    <div className="flex items-center gap-4 opacity-60">
                      <span className="text-xs font-semibold text-muted-foreground">
                        LinkedIn
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        CNBC
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        Product Hunt
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        Foundr
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Compare Demo */}
              <div className="lg:w-1/2 flex flex-col lg:pt-44 items-center">
                <CompareDemo />

                <div className="mt-6">
                  <AvatarGroup className="grayscale -space-x-1" data-size="lg">
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>

                    <AvatarGroupCount className="ml-4">
                      <RefreshCcw className="w-4 h-4 text-primary" />
                    </AvatarGroupCount>
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Chat Button */}
          <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-50">
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        </section>
      </main>
    </>
  );
}
