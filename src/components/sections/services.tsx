"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { services, iconMap } from "@/lib/data";

export function Services() {
  const coreServices = services.slice(0, 5);

  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Services"
          title="What I Can Build For You"
          description="End-to-end backend engineering. Projects typically range from $3,000 to $15,000 depending on scope."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreServices.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-6 h-full border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    {Icon && <Icon size={24} className="text-primary" />}
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-text-muted text-xs"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
