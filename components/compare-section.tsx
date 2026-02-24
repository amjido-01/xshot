"use client";

import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const xshotFeatures = [
  "Studio-grade, natural look",
  "Keeps your photos private",
  "Realistic skin + true-to-you results",
  "Consistently sharp & high-quality",
  "Easy, guided upload flow",
  "Photos you can confidently use anywhere",
];

const typicalAiFeatures = [
  "Looks very AI-generated",
  "You don't know where your photos end up",
  'Plastic skin, odd smiles, "not quite you"',
  "Quality is unpredictable",
  "No guidance. You're guessing the whole time",
  "Not dependable for professional use",
];

const xshotImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
];

const typicalAiImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=40&w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=40&w=400&h=600&fit=crop",
];

export const CompareSection = () => {
  return (
    <section className="py-24 bg-black border text-white px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold font-bricolage text-foreground ">
            XShot Studio Model vs. Typical AI
          </h2>
          <p className="leading-[28px] text-muted-foreground text-[18px] font-semibold italic max-w-2xl mx-auto">
            (why not all AI headshots are created equal)
          </p>
          <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Not all AI tools are built for headshots. Large language models can
            generate images, but they can't match a system designed specifically
            for{" "}
            <span className="text-white font-semibold">
              professional portraits, privacy, and realism.
            </span>
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* XShot Column */}
          <div className="flex flex-col gap-6 group">
            <div className="bg-primary py-2 px-6 rounded2xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-400/30">
              <Sparkles className="text-white animate-pulse" size={20} />
              <span className="text-[16px] font-medium font-bricolage tracking-tight">
                XShot Studio Model
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {xshotImages.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden border border-blue-500/20 shadow-2xl"
                >
                  <Image
                    src={src}
                    alt={`XShot Quality ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>
              ))}
            </div>

            <ul className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              {xshotFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                    <CheckCircle2 className="text-blue-400" size={16} />
                  </div>
                  <span className="text-gray-200 font-medium leading-tight">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typical AI Column */}
          <div className="flex flex-col gap-6 opacity-80 hover:opacity-100 transition-opacity">
            <div className="bg-card py-2 px-6 rounded2xl flex items-center justify-center gap-2 border border-white/10">
              <span className="text-[16px] font-medium font-bricolage tracking-tight">
                ChatGPT & Other LLMs
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {typicalAiImages.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/5 grayscale-[0.2]"
                >
                  <Image
                    src={src}
                    alt={`Typical AI Quality ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              ))}
            </div>

            <ul className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              {typicalAiFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-yellow-500/10 p-1 rounded-full">
                    <AlertTriangle className="text-yellow-500/60" size={16} />
                  </div>
                  <span className="text-gray-400 leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="group relative bg-primary px-8 py-4 rounded-full font-bold text-[16px] leading-[24px] transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-2 mx-auto">
            See pricing
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
