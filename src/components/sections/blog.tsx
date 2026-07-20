"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="relative py-16 sm:py-20">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Blog"
          title="Technical Insights"
          description="Deep dives into backend architecture, Laravel best practices, and modern engineering patterns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass rounded-xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-primary/10 via-surface to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-5xl font-bold gradient-text opacity-50">
                    {post.title.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-text-muted text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed mb-3">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-surface text-text-muted text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform"
                    />
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
