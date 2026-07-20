"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Zap,
  Users,
  Clock,
  ChevronDown,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  const metricIconMap: Record<string, typeof TrendingUp> = {
    "API Response": Clock,
    "Search Speed": Zap,
    "Modules Built": TrendingUp,
    "Architecture": TrendingUp,
    "Modules": TrendingUp,
    "Packages": TrendingUp,
    "Status": TrendingUp,
    "Response Time": Clock,
    "Automation": Zap,
    "RBAC Roles": Users,
    "Database": TrendingUp,
    "Framework": TrendingUp,
    "User Roles": Users,
    "SEO Score": TrendingUp,
    "Cache Hit": TrendingUp,
    "Query Time": Clock,
    "Cache": TrendingUp,
    "Pattern": TrendingUp,
    "Real-time": Zap,
    "API Endpoints": ExternalLink,
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Featured Work"
          title="Projects That Made an Impact"
          description="Enterprise-scale systems built with Laravel, Node.js, TypeScript, Docker, AI/LLM, React, Microservices, and modern DevOps practices."
        />

        <div className="flex justify-center gap-2 mb-12">
          {[
            { value: "all", label: "All Projects" },
            { value: "featured", label: "Featured Only" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value as "all" | "featured")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                filter === f.value
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface text-text-secondary hover:text-text-primary"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedProject === project.title;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ScrollReveal>
                    <div
                      className={cn(
                        "glass rounded-2xl overflow-hidden transition-all duration-300",
                        isExpanded && "border-primary/30 shadow-lg shadow-primary/5"
                      )}
                    >
                      <div
                        className="p-6 sm:p-8 cursor-pointer"
                        onClick={() =>
                          setExpandedProject(isExpanded ? null : project.title)
                        }
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-text-primary group hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              {project.featured && (
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                                  Featured
                                </span>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-text-muted hover:text-accent transition-colors"
                                  title="Visit live site"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-md bg-surface text-text-secondary text-xs font-medium border border-border/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                              >
                                Live Demo <ArrowRight size={12} />
                              </a>
                            )}
                            <div className="flex -space-x-2">
                              {project.metrics.slice(0, 2).map((metric) => (
                                <div
                                  key={metric.label}
                                  className="w-16 h-16 rounded-xl bg-surface border border-border flex flex-col items-center justify-center"
                                >
                                  <span className="text-xs font-bold text-primary">
                                    {metric.value}
                                  </span>
                                  <span className="text-[9px] text-text-muted leading-tight text-center mt-0.5">
                                    {metric.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={20} className="text-text-muted" />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-8 pb-8 border-t border-border/30">
                              <div className="grid lg:grid-cols-2 gap-8 mt-8">
                                <div>
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-3">
                                    The Problem
                                  </h4>
                                  <p className="text-text-secondary text-sm leading-relaxed">
                                    {project.problem}
                                  </p>

                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-3 mt-6">
                                    The Solution
                                  </h4>
                                  <p className="text-text-secondary text-sm leading-relaxed">
                                    {project.solution}
                                  </p>

                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-3 mt-6">
                                    Architecture
                                  </h4>
                                  <p className="text-text-secondary text-sm leading-relaxed">
                                    {project.architecture}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-3">
                                    Key Challenges
                                  </h4>
                                  <ul className="space-y-2">
                                    {project.challenges.map((challenge) => (
                                      <li
                                        key={challenge}
                                        className="flex items-start gap-2 text-text-secondary text-sm"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                        {challenge}
                                      </li>
                                    ))}
                                  </ul>

                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-3 mt-6">
                                    Impact &amp; Metrics
                                  </h4>
                                  <div className="grid grid-cols-2 gap-3">
                                    {project.metrics.map((metric) => {
                                      const Icon =
                                        metricIconMap[metric.label] || TrendingUp;
                                      return (
                                        <div
                                          key={metric.label}
                                          className="glass rounded-xl p-3 flex items-center gap-3"
                                        >
                                          <Icon size={16} className="text-primary flex-shrink-0" />
                                          <div>
                                            <div className="text-lg font-bold text-text-primary">
                                              {metric.value}
                                            </div>
                                            <div className="text-[10px] text-text-muted leading-tight">
                                              {metric.label}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/30">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
                                  >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Source Code
                                  </a>
                                )}
                                {project.demo && (
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
                                  >
                                    Visit Live Site <ArrowRight size={14} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
