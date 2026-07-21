"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Code2, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { siteConfig } from "@/lib/data";

const techIcons = [
  { name: "Laravel", gradient: "from-[#FF2D20] to-[#FF2D20]" },
  { name: "PHP", gradient: "from-[#777BB4] to-[#8892BF]" },
  { name: "Node.js", gradient: "from-[#339933] to-[#5FA04E]" },
  { name: "TypeScript", gradient: "from-[#3178C6] to-[#4B96EA]" },
  { name: "React", gradient: "from-[#61DAFB] to-[#61DAFB]" },
  { name: "Docker", gradient: "from-[#2496ED] to-[#2496ED]" },
  { name: "AI / LLM", gradient: "from-[#A855F7] to-[#C084FC]" },
  { name: "MySQL", gradient: "from-[#4479A1] to-[#5A9BC7]" },
  { name: "MongoDB", gradient: "from-[#47A248] to-[#47A248]" },
  { name: "Redis", gradient: "from-[#DC382D] to-[#DC382D]" },
  { name: "CI/CD", gradient: "from-[#06B6D4] to-[#22D3EE]" },
  { name: "Microservices", gradient: "from-[#2563EB] to-[#3B82F6]" },
  { name: "REST API", gradient: "from-[#F59E0B] to-[#FBBF24]" },
  { name: "Yii2", gradient: "from-[#1C9956] to-[#1C9956]" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                {siteConfig.availability}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="gradient-text">Zend Certified</span>
              <br />
              Laravel & PHP
              <br />
              <span className="text-text-primary">Backend Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-6"
            >
              I build production-ready eCommerce, marketplace &amp; SaaS backends that scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-muted text-base leading-relaxed max-w-xl mb-8"
            >
              {siteConfig.yearsOfExperience}+ years. 7 platforms. 15+ clients. Clean architecture, zero downtime deployments, and measurable performance gains &mdash; every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                variant="gradient"
                size="lg"
                className="sm:size-xl w-full sm:w-auto justify-center"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <CalendarDays size={18} />
                Book a Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="sm:size-xl w-full sm:w-auto justify-center"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See My Work
                <ArrowRight size={18} />
              </Button>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 rounded-2xl px-8 sm:px-10 text-base sm:text-lg font-medium border border-accent/30 text-accent hover:bg-accent/10 transition-all w-full sm:w-auto"
              >
                <CalendarDays size={18} />
                Schedule Call
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 sm:gap-8 mt-12 pt-8 border-t border-border/30"
            >
              {[
                { icon: Briefcase, value: siteConfig.yearsOfExperience, suffix: "+", label: "Years Experience" },
                { icon: Code2, value: siteConfig.projectsCompleted, suffix: "+", label: "Projects Delivered" },
                { icon: Users, value: siteConfig.clientsServed, suffix: "+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon size={20} className="text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-text-primary">
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-first lg:order-none"
          >
            <div className="relative mt-6 lg:mt-0">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-accent/20 border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl bg-surface flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/avatar.jpg"
                    alt="MD Jubayer Hossain - Zend Certified Laravel & PHP Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 border border-border/50 text-center whitespace-nowrap">
                <div className="text-xs sm:text-sm font-semibold text-white">MD Jubayer Hossain</div>
                <div className="text-[10px] sm:text-xs text-accent mt-0.5">Zend Certified PHP Engineer</div>
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-2xl border border-accent/30 flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="text-accent text-lg sm:text-xl font-bold">ZEND</div>
                  <div className="text-text-muted text-[9px] sm:text-[10px]">Certified</div>
                </div>
              </div>
              <div className="absolute -bottom-20 sm:-bottom-24 -left-3 sm:-left-4 w-24 h-16 sm:w-28 sm:h-20 bg-success/10 rounded-2xl border border-success/20 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-center">
                  <div className="text-success text-lg sm:text-xl font-bold">{siteConfig.projectsCompleted}+</div>
                  <div className="text-text-muted text-[9px] sm:text-[10px]">Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"
      >
        <div className="glass rounded-2xl px-4 py-5 border border-border/30 overflow-hidden">
          <p className="text-text-muted text-[10px] uppercase tracking-[0.25em] text-center mb-3">
            Modern Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.05 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-surface/80 transition-all cursor-default group"
              >
                <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${tech.gradient} group-hover:shadow-lg group-hover:shadow-current/30`} />
                <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
