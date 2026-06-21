import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepak Raj R — Full Stack Developer & AI Specialist" },
      { name: "description", content: "Portfolio of Deepak Raj R — Full Stack Developer & AI Specialist based in Chennai, India. Building scalable, intelligent digital experiences." },
      { property: "og:title", content: "Deepak Raj R — Full Stack Developer & AI Specialist" },
      { property: "og:description", content: "Full Stack Developer & AI Specialist building scalable, intelligent digital experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
}
