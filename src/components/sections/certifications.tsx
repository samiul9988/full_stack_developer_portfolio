"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { certifications, iconMap } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Credentials"
          title="Industry Certifications"
          description="Validated expertise through rigorous certification programs from leading technology organizations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon];

            return (
              <ScrollReveal key={cert.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={cn(
                    "glass rounded-2xl p-6 text-center h-full transition-all duration-300 hover:border-primary/30",
                    index === 0 && "border-primary/30 shadow-lg shadow-primary/10"
                  )}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    {Icon ? (
                      <Icon size={26} className="text-primary" />
                    ) : (
                      <Award size={26} className="text-primary" />
                    )}
                  </div>

                  <h3 className="font-semibold text-text-primary mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-text-muted text-xs mb-3">{cert.date}</p>

                  {cert.credentialId && (
                    <p className="text-[10px] text-text-muted font-mono bg-surface rounded-lg px-3 py-1.5 inline-block">
                      {cert.credentialId}
                    </p>
                  )}

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-xs mt-3 hover:underline"
                    >
                      Verify <ExternalLink size={10} />
                    </a>
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
