import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { Sparkles } from "lucide-react";

const serviceLinks = [
  { href: "#", label: "AI Headshot Generator" },
  { href: "#", label: "X Profile Analysis" },
  { href: "#", label: "Identity Synthesis" },
  { href: "#", label: "Reach Optimization" },
  { href: "#", label: "Pricing" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Usage Rights" },
  { href: "#", label: "Cookie Policy" },
];

const companyLinks = [
  { href: "#", label: "About Us" },
  { href: "#", label: "Wall of Love" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Affiliates" },
];

const socialLinks = [
  {
    href: "#",
    label: "X / Twitter",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 mb-1 border-t border-border/50 bg-background pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Elevate your professional brand with studio-quality AI headshots
              and reach-optimized profile analysis.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h3 className="font-bricolage font-bold text-foreground mb-6 uppercase tracking-wider text-xs">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bricolage font-bold text-foreground mb-6 uppercase tracking-wider text-xs">
              Legal
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bricolage font-bold text-foreground mb-6 uppercase tracking-wider text-xs">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="font-bricolage font-bold text-foreground mb-6 uppercase tracking-wider text-xs italic text-primary">
              Stay Updated
            </h3>
            <form className="space-y-3">
              <Input
                className="bg-card border-border/50 text-xs py-5 rounded-xl focus:ring-primary/20"
                placeholder="Your work email"
                type="email"
                required
              />
              <Button className="w-full rounded-xl py-5 text-sm font-bold group bg-primary hover:bg-primary/90">
                Subscribe
                <Sparkles className="ml-2 size-3.5 group-hover:rotate-12 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[13px]">
            &copy; {new Date().getFullYear()} XShot Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-[13px]">
            <span className="text-muted-foreground italic">
              100% Privacy Guaranteed
            </span>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
