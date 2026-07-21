"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { skills, iconMap } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Languages",
  "Frameworks",
  "Architecture",
  "Infrastructure",
  "Databases",
  "Authentication",
  "Tools",
  "Deployment",
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Technical Arsenal"
          title="Skills That Deliver Results"
          description="4+ years of hands-on engineering. One mission: building production-ready backend systems that scale."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface text-text-secondary hover:text-text-primary hover:bg-surface/80 border border-border/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon];
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="glass rounded-xl p-5 cursor-default transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {Icon && <Icon size={20} className="text-primary" />}
                    </div>
                    <span className="text-xs font-medium text-text-muted bg-surface px-2 py-1 rounded-md">
                      {skill.years}y
                    </span>
                  </div>

                  <h4 className="font-semibold text-text-primary mb-1">{skill.name}</h4>

                  <div className="mt-3 mb-2">
                    <div className="flex justify-between text-xs text-text-muted mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-text-secondary text-xs leading-relaxed mt-2 overflow-hidden"
                      >
                        {skill.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
