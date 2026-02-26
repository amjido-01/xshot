"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ActionSection = () => {
  const benefits = [
    {
      text: "4K, Studio Quality Results in under 60 minutes",
      icon: <CheckCircle2 className="text-primary size-5" />,
    },
    {
      text: "Pick from +150 styles",
      icon: <CheckCircle2 className="text-primary size-5" />,
    },
    {
      text: "100% money-back guarantee",
      icon: <CheckCircle2 className="text-primary size-5" />,
    },
    {
      text: "Your Data, Fully Protected",
      icon: <CheckCircle2 className="text-primary size-5" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual Inspiration */}
        <div className="relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-[16/9] bg-zinc-900 flex items-center justify-center">
            {/* YouTube Iframe */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" // Placeholder video, replace with your actual video ID
              title="XShot AI Headshot Generator"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 size-full"
            ></iframe>
          </div>

          {/* "How it works?" Badge */}
          <motion.div
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            whileInView={{ scale: 1, rotate: -8, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="absolute -bottom-6 -right-6 md:-right-10 z-20"
          >
            <div className="size-24 md:size-32 rounded-full bg-primary flex flex-col items-center justify-center text-center p-2 shadow-[0_0_30px_rgba(29,155,240,0.5)] border-4 border-background rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer">
              <span className="text-white font-bricolage text-sm md:text-base font-bold leading-tight">
                How it
                <br />
                works?
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold font-bricolage text-foreground">
              Still don't believe this works? <br />
              <span className="text-primary italic">See it in action!</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Discover how we used XShot's AI Headshot Generator to turn our
              selfies into our professional LinkedIn headshots.
            </p>
          </div>

          <ul className="space-y-5">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 text-foreground font-medium text-lg"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <span>{benefit.text}</span>
              </motion.li>
            ))}
          </ul>

          <div className="pt-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold group shadow-xl shadow-primary/20"
            >
              Get Started Now
              <Sparkles
                className="ml-2 group-hover:rotate-12 transition-transform"
                size={20}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
