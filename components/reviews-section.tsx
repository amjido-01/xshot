"use client";

import React from "react";
import Image from "next/image";
import { Star, Sparkles, Heart, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Adam B.",
    text: "XShot is now my go-to for professional ph...",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Mo S.",
    text: "As a real estate agent needing a polished pro...",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Oliver M.",
    text: "Game-changer? Absolutely. High-quality photos...",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Amalia M.",
    text: "Very satisfied with the quick service and qua...",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Zara K.",
    text: "Photos came out better than some studios I've...",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Michele C.",
    text: "While the concept of XShot is innovative,...",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=600&fit=crop",
    rating: 3,
  },
  {
    name: "Rodney S.",
    text: "I was genuinely impressed by the quality of s...",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Lucy G.",
    text: "Effective, fast, and easy. Great service!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Samantha L.",
    text: "Could update my linkedin profile pic in minut...",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
];

const RatingStars = ({
  rating,
  size = 16,
}: {
  rating: number;
  size?: number;
}) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            "fill-current",
            i < rating ? "text-yellow-400" : "text-gray-400",
          )}
        />
      ))}
    </div>
  );
};

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <RatingStars rating={5} size={24} />
          <h2 className="mt-4 text-3xl font-semibold font-bricolage text-foreground">
            4.5 rating of 2947 reviews
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* AI Summary Card */}
          <div className="bg-blue-50/10 rounded-2xl p-6 border border-blue-500/20 flex flex-col justify-between h-[380px] lg:h-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={20} className="text-blue-400" />
                <h3 className="font-semibold text-xl">AI Summary</h3>
              </div>
              <p className="text-muted-foreground text-[14px] leading-relaxed">
                Customers praise the product's convenience, price and ease of
                use, especially for selecting styles and AI Feedback on
                uploading images.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-pink-400 rounded-full p-1.5">
                  <Heart size={14} className="text-white fill-current" />
                </div>
                <div className="bg-blue-400 rounded-full p-1.5">
                  <ThumbsUp size={14} className="text-white fill-current" />
                </div>
                <div className="bg-black/50 rounded-full px-2 py-1 text-[12px] font-bold border border-white/20">
                  +39
                </div>
              </div>
              <p className="text-[12px] text-muted-foreground">
                based on 41 written reviews
              </p>
            </div>
          </div>

          {/* Review Cards */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden aspect-[10/15] border border-white/10"
            >
              <Image
                src={review.image}
                alt={review.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Badge */}
              <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-2 z-10">
                <div className="bg-primary/80 rounded-full p-1">
                  <Sparkles size={10} className="text-white" />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  XS AI Model
                </span>
              </div>
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                <RatingStars rating={review.rating} />
                <h4 className="font-bold text-lg mt-1">{review.name}</h4>
                <p className="text-[12px] text-gray-300 line-clamp-2 mt-1 italic leading-tight">
                  "{review.text}"
                </p>
                <button className="text-[10px] text-white underline mt-2 text-left opacity-70 hover:opacity-100 transition-opacity">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
