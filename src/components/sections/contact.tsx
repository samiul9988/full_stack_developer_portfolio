"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { siteConfig } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Contact"
          title="Let&apos;s Work Together"
          description="Have a project in mind? Let&apos;s discuss how I can help bring your vision to life."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <ScrollReveal className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-text-secondary text-sm max-w-md">
                    Thank you for reaching out. I typically respond within 24 hours
                    during business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      />
                      {errors.name && (
                        <p className="text-error text-xs mt-1.5">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      />
                      {errors.email && (
                        <p className="text-error text-xs mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Subject
                    </label>
                    <input
                      {...register("subject")}
                      id="subject"
                      type="text"
                      placeholder="Project Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                    />
                    {errors.subject && (
                      <p className="text-error text-xs mt-1.5">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="text-error text-xs mt-1.5">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="space-y-4">
            <div className="glass rounded-2xl p-6 space-y-5">
              <h3 className="text-lg font-semibold text-text-primary">
                Contact Information
              </h3>

              {[
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MapPin, label: "Location", value: siteConfig.location },
                { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-primary text-sm hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">
                Schedule a Call
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Prefer a quick call? Book a 30-minute consultation directly on my calendar.
              </p>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-all w-full justify-center"
              >
                <CalendarDays size={16} />
                Book a Meeting
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={18} className="text-success" />
                <span className="text-sm font-medium text-text-primary">
                  Quick Response
                </span>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                I typically respond within 24 hours during business days. For urgent
                inquiries, feel free to reach out via WhatsApp or schedule a call.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
