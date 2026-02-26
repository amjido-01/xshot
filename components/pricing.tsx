import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for a quick professional refresh.",
      features: [
        "40 Studio-quality headshots",
        "10 Unique styles & backgrounds",
        "60-minute turnaround",
        "Personal-use license",
        "Standard 2K resolution",
      ],
      buttonText: "Get Started",
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$49",
      description: "The most popular choice for professionals.",
      features: [
        "100 Studio-quality headshots",
        "30+ Premium styles & outfits",
        "30-minute priority turnaround",
        "Commercial-use license",
        "Ultra-HD 4K resolution",
        "AI-powered retouching",
      ],
      buttonText: "Go Pro",
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Studio",
      price: "$79",
      description: "Maximum variety for total brand control.",
      features: [
        "200 Studio-quality headshots",
        "Unlimited styles & backgrounds",
        "Instant processing",
        "Full commercial rights",
        "8K Resolution output",
        "Custom style training",
      ],
      buttonText: "Get Studio",
      variant: "outline" as const,
    },
  ];

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mx-auto max-w-2xl space-y-6 text-center mb-16">
          <h2 className="text-center text-4xl font-bold lg:text-5xl font-bricolage tracking-tight">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose the perfect plan to elevate your professional identity. No
            hidden fees, just studio-grade results in minutes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative bg-card border-border transition-all duration-300 hover:border-primary/50 ${plan.popular ? "scale-105 shadow-2xl shadow-primary/10" : ""}`}
            >
              {plan.popular && (
                <>
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20">
                    Most Popular
                  </span>
                  <BorderBeam size={250} duration={12} delay={9} />
                </>
              )}

              <CardHeader className="pt-8">
                <CardTitle className="font-bricolage text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">/ once</span>
                </div>
                <CardDescription className="text-muted-foreground mt-4 line-clamp-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow space-y-6">
                <hr className="border-border/50 border-dashed" />
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <div className="mt-1 bg-primary/10 rounded-full p-0.5">
                        <Check className="size-3.5 text-primary italic" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-8">
                <Button
                  asChild
                  variant={plan.variant}
                  className={`w-full rounded-full py-6 font-semibold transition-all group ${plan.popular ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" : ""}`}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-2"
                  >
                    {plan.buttonText}
                    {plan.popular && (
                      <Sparkles className="size-4 group-hover:rotate-12 transition-transform" />
                    )}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground text-sm">
          All plans include a 100% money-back guarantee.
        </p>
      </div>
    </section>
  );
}
