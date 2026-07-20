"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

const ParticleBackground = dynamic(
  () =>
    import("@/components/shared/particle-background").then(
      (mod) => mod.ParticleBackground
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Certifications />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </>
  );
}
