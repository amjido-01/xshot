"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
  Palette,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Features() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/connect.jpg",
      alt: "X Profile Analysis",
    },
    "item-2": {
      image: "/identity.jpg",
      alt: "Identity Synthesis",
    },
    "item-3": {
      image: "/studio.jpg",
      alt: "AI Headshot Generation",
    },
    "item-4": {
      image: "/deploy.jpg",
      alt: "Reach Optimization",
    },
  };

  return (
    <section className="py-12">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-[1rem] text-foreground font-semibold lg:text-[31px] font-bricolage leading-[2.25rem]">
            Your Easy Shortcut to a{" "}
            <span className="text-primary">High-Conversion X </span> Brand
          </h2>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-[16px] leading-[24px] font-sans font-semibold">
                  <Database className="size-4" />
                  Connect Your X Profile
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[16px] leading-[24px] font-sans text-muted-foreground">
                Enter your X handle. Our AI scans your posting history, audience
                demographics, and brand voice to understand your unique digital
                footprint.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-[16px] leading-[24px] font-sans font-semibold">
                  <Fingerprint className="size-4" />
                  Brand Identity Synthesis
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[16px] leading-[24px] font-sans text-muted-foreground">
                We map your brand archetypes to professional styles. Our system
                identifies the colors, lighting, and "vibe" that will resonate
                most with your followers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-[16px] leading-[24px] font-sans font-semibold">
                  <IdCard className="size-4" />
                  AI Studio Generation
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[16px] leading-[24px] font-sans text-muted-foreground">
                Download 50+ studio-quality headshots and reach-optimized bio
                variants. Every asset is designed to increase your
                profile-to-follower conversion rate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-[16px] leading-[24px] font-sans font-semibold">
                  <ChartBarIncreasingIcon className="size-4" />
                  Deploy & Scale Reach
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[16px] leading-[24px] font-sans text-muted-foreground">
                Update your profile and watch your reach grow. Our data shows
                that brand-aligned profiles get 35% more engagement on average.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
              <BorderBeam
                duration={6}
                size={200}
                colorFrom="var(--primary)"
                colorTo="var(--primary)"
                className="from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex font-sans justify-center item-center gap-4">
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
                      <span className="text-nowrap text-[14px] font-semibold leading-[20px]">Watch Demo Video</span>
                      <Play className="w-4 h-4 text-primary" />
                    </Link>
                  </Button>
        </div>
      </div>
    </section>
  );
}
