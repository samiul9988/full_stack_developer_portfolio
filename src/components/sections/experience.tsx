"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Career"
          title="Professional Journey"
          description="Two companies. Dozens of features shipped. A consistent record of delivering backend systems on time."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border/50 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.1}>
                <div className="relative pl-14">
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hidden md:flex">
                    <Briefcase size={18} className="text-primary" />
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="glass rounded-xl p-6 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-text-muted text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-text-secondary text-sm"
                        >
                          <ChevronRight
                            size={14}
                            className="text-primary mt-0.5 flex-shrink-0"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-surface text-text-muted text-xs font-medium border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
