"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Heart, Shield, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const pillars = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every architectural decision is measured by its business impact. I build systems that directly contribute to revenue growth and operational efficiency.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I thrive on solving complex technical challenges. From legacy migrations to distributed systems, I find elegant solutions to hard problems.",
  },
  {
    icon: Heart,
    title: "Quality Obsessed",
    description: "Clean code, comprehensive tests, and thorough documentation are not optional. I take pride in delivering production-ready, maintainable systems.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "I work as an extension of your team, not just a contractor. Clear communication, transparency, and reliability are the foundations of every engagement.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="About Me"
          title="Building Scalable Backend Systems with Clean Architecture"
          description="4+ years of hands-on backend development, turning complex business requirements into robust, maintainable systems that power eCommerce, marketplaces, and enterprise applications."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  The Journey
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I started my professional journey in 2022 as a Backend Developer at
                  Dynamicflow IT, where I built REST APIs, optimized MySQL databases, and
                  maintained WordPress and custom business applications.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  In 2024, I joined Coder71 Ltd., where I&apos;ve been developing
                  enterprise-scale Laravel applications, building eCommerce and marketplace
                  platforms, integrating AI services, and architecting modular systems.
                  I earned my Zend Certified PHP Engineer certification validating my
                  deep PHP expertise.
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  I specialize in the Laravel and Yii2 ecosystems with a strong focus on
                  Clean Architecture, SOLID principles, Repository and Service patterns,
                  and cloud infrastructure. Every line of code I write is designed to be
                  maintainable, testable, and production-ready.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="glass rounded-xl p-6 flex gap-4 items-start group cursor-default transition-all hover:border-primary/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-16">
          <div className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-text-primary">
                Let&apos;s Build Something Great Together
              </h3>
              <p className="text-text-secondary text-sm mt-1">
                I&apos;m currently available for freelance and contract opportunities.
              </p>
            </div>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
