import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - Portfolio`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
