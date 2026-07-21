"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays, MessageSquare } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const scrollToSection = useCallback(
    (href: string) => {
      closeMenu();
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    },
    [closeMenu]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-4"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-xl font-bold tracking-tight flex items-center gap-2 flex-shrink-0"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
              JH
            </span>
            <span className="hidden sm:block text-text-primary">
              {siteConfig.name.split(" ")[0]}
              <span className="text-text-muted font-normal">.</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-all duration-300 relative",
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center gap-2 h-9 rounded-lg px-4 text-xs font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-all"
            >
              <MessageSquare size={14} />
              Get a Quote
            </button>
            <button
              onClick={() => window.open(siteConfig.calendly, "_blank", "noopener noreferrer")}
              className="inline-flex items-center gap-2 h-9 rounded-lg px-4 text-xs font-medium bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <CalendarDays size={14} />
              Book a Call
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex lg:hidden items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors flex-shrink-0"
            aria-label="Open menu"
          >
            <Menu size={18} />
            <span className="text-xs">Menu</span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 left-0 bottom-0 z-[101] w-[280px] sm:w-[320px] bg-[#0A0F24] border-r border-primary/20 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-primary/10">
                <span className="text-base font-bold text-white">Navigation</span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-3">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    onClick={() => scrollToSection(link.href)}
                    className={cn(
                      "w-full text-left px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all mb-1",
                      activeSection === link.href.replace("#", "")
                        ? "bg-primary/15 text-primary border border-primary/25"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <div className="p-4 border-t border-primary/10 space-y-2.5">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
                >
                  <MessageSquare size={16} />
                  Get a Quote
                </button>
                <button
                  onClick={() => {
                    closeMenu();
                    window.open(siteConfig.calendly, "_blank", "noopener noreferrer");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  <CalendarDays size={16} />
                  Book a Call
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
