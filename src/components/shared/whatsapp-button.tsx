"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=Hi%20Jubayer%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-success border-2 border-background">
        <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
      </span>
    </motion.a>
  );
}
