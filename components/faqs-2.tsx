"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsTwo() {
  const faqItems = [
    {
      id: "item-1",
      question: "How many photos do I need to upload?",
      answer:
        "For best results, we recommend uploading 10-15 clear selfies with various angles and lighting. Our AI uses these to synthesize your unique identity and generate studio-grade portraits.",
    },
    {
      id: "item-2",
      question: "Is my data and photo privacy protected?",
      answer:
        "Absolutely. We use enterprise-grade encryption for all uploads. Your original photos are deleted automatically after the AI model training is complete, and we never sell your data to third parties.",
    },
    {
      id: "item-3",
      question: 'What is an "X Profile Visual Audit"?',
      answer:
        "Included in our Pro and Elite plans, our AI analyzes your current X (Twitter) profile to recommend the best headshot styles, color palettes, and bio variants that will resonate most with your specific audience.",
    },
    {
      id: "item-4",
      question: "How long does the generation process take?",
      answer:
        "Standard processing takes about 60 minutes. Priority users (Pro and Elite) typically receive their results in under 30 minutes, with Elite members getting near-instant processing.",
    },
    {
      id: "item-5",
      question: "Do I own the rights to the generated images?",
      answer:
        "Yes! You have full ownership and commercial rights to all the headshots you download. You can use them on LinkedIn, X, personal websites, or even in print media.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl font-bricolage tracking-tight">
            Got <span className="text-primary italic">Questions?</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Everything you need to know about XShot, privacy, and how we help
            you build a high-conversion digital brand.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card w-full rounded-3xl border border-border p-4 md:p-8 shadow-2xl shadow-black/20"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-border/50 border-dashed last:border-0 px-2"
              >
                <AccordionTrigger className="cursor-pointer text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed text-[16px]">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Still curious? Reach out to our{" "}
              <Link
                href="#"
                className="text-primary font-bold hover:underline underline-offset-4 decoration-primary/30"
              >
                24/7 Support Team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
