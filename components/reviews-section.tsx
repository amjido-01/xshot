"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  Sparkles,
  Heart,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Adam B.",
    text: "XShot is now my go-to for professional photos...",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Mo S.",
    text: "As a real estate agent needing a polished profile...",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Oliver M.",
    text: "Game-changer? Absolutely. High-quality photos in minutes.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Amalia M.",
    text: "Very satisfied with the quick service and quality.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Zara K.",
    text: "Photos came out better than some studios I've been to.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Michele C.",
    text: "While the concept is innovative, I had some issues.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=600&fit=crop",
    rating: 3,
  },
  {
    name: "Rodney S.",
    text: "I was genuinely impressed by the quality of service.",
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
    text: "Could update my linkedin profile pic in minutes!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "David K.",
    text: "Impressive results, saved me a lot of time.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Elena R.",
    text: "The AI is getting scarily good. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Thomas W.",
    text: "Great for professional headshots without a photographer.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Sophie T.",
    text: "I love how easy it is to try different styles.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Marco P.",
    text: "Excellent service, quick turnaround.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Isabella J.",
    text: "Surprisingly accurate and high quality.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "James H.",
    text: "A bit skeptical at first, but blown away by the result.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Claire D.",
    text: "Perfect for my new business venture.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Robert M.",
    text: "The future of photography is here.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Lily C.",
    text: "So happy with my new profile picture!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Arthur S.",
    text: "Highly efficient and great quality.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Anna V.",
    text: "Loved the feedback on my photos.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Kevin L.",
    text: "Best value for money headshots.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Sarah W.",
    text: "Incredibly fast and results are stunning.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Michael B.",
    text: "Revolutionized my LinkedIn profile.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Emily D.",
    text: "So many styles to choose from!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Chris J.",
    text: "Top-notch AI photography.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Jessica R.",
    text: "Saved me hundreds on a professional shoot.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Daniel S.",
    text: "Quality is indistinguishable from real photos.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Laura G.",
    text: "Easy to use and very professional.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Paul M.",
    text: "Highly impressed with the attention to detail.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Natalie H.",
    text: "Perfect for busy professionals.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Brian C.",
    text: "The AI feedback is super helpful.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Olivia F.",
    text: "Exceeded my highest expectations.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Steven T.",
    text: "Great support and amazing results.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Rachel K.",
    text: "Finally found a headshot service I love.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Alex V.",
    text: "The variety of backgrounds is impressive.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Megan L.",
    text: "So easy a child could do it.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Jason W.",
    text: "My profile views tripled!",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Chloe S.",
    text: "Professional quality at a fraction of the cost.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Mark P.",
    text: "The lighting is perfect every time.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Mia D.",
    text: "So convenient and high quality.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Andrew J.",
    text: "A must-have for any modern professional.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Sophia R.",
    text: "Fast, reliable, and amazing results.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Nathan B.",
    text: "Saved me so much time and effort.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Grace K.",
    text: "Love the new look for my website.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Ryan M.",
    text: "The best AI headshot generator out there.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Ashley W.",
    text: "Exceeded all my expectations.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=600&fit=crop",
    rating: 5,
  },
  {
    name: "Tyler C.",
    text: "Simply incredible quality.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=600&fit=crop",
    rating: 4,
  },
  {
    name: "Hannah J.",
    text: "The results speak for themselves.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&fit=crop",
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // Pagination logic for two rows (1 static card + 9 reviews = 10 items per page)
  const getPageReviews = () => {
    const startIndex = (currentPage - 1) * 9;
    return reviews.slice(startIndex, startIndex + 9);
  };

  const currentReviews = getPageReviews();

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
          {/* AI Summary Card - Static on all pages */}
          <div className="bg-blue-50/10 rounded-2xl p-6 border border-blue-500/20 flex flex-col justify-between h-[380px] lg:h-auto animate-in fade-in duration-500">
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
          {currentReviews.map((review, index) => (
            <div
              key={`${currentPage}-${index}`}
              className="relative group rounded-2xl overflow-hidden aspect-[10/15] border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
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

          {/* Fill remaining slots on Page 1 if needed, or just allow it to be 1 row */}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() =>
              setCurrentPage((prev: number) => Math.max(1, prev - 1))
            }
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={cn(
                "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm font-medium transition-all duration-200",
                page === currentPage
                  ? "bg-white text-black border-white"
                  : "hover:bg-white/10 hover:border-white/20 text-white/60 hover:text-white",
              )}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev: number) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
