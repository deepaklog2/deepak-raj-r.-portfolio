import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Sparkles } from "lucide-react";

type Cat = "All" | "Web" | "AI" | "Healthcare";

const projects: Array<{
  title: string;
  desc: string;
  tags: string[];
  link: string;
  cats: Cat[];
  featured?: boolean;
}> = [
  {
    title: "AeroGenius",
    desc: "AI-driven web app enhancing human life across sectors through intelligent automation and insights.",
    tags: ["AI", "Web", "Automation"],
    link: "https://www.youtube.com/watch?v=vjOxwr8FeBI",
    cats: ["AI", "Web"],
    featured: true,
  },
  {
    title: "Lumen AI",
    desc: "Upload a lecture/podcast/meeting — transcribes with diarization, translates 14 languages, generates summaries/quizzes/flashcards & chat with transcript.",
    tags: ["AI", "NLP", "React"],
    link: "https://lumen-ai-audiototextai.lovable.app/",
    cats: ["AI", "Web"],
    featured: true,
  },
  {
    title: "Diabetes Prediction App",
    desc: "ML-powered healthcare app predicting diabetes risk with tailored medication recommendations.",
    tags: ["ML", "Python", "Streamlit"],
    link: "https://makeitsimple.streamlit.app/",
    cats: ["AI", "Healthcare"],
    featured: true,
  },
  {
    title: "Doctor Availability System",
    desc: "Healthcare platform streamlining doctor-patient interactions via appointment scheduling and availability management.",
    tags: ["Full Stack", "Healthcare"],
    link: "https://drive.google.com/file/d/1bjRYVAV3NJ-05RkqsafRwwCagVZDxaI2/view",
    cats: ["Web", "Healthcare"],
  },
  {
    title: "Restaurant Website",
    desc: "Elegant restaurant site with online menu, booking system, and promotional content.",
    tags: ["Web", "Booking"],
    link: "https://drive.google.com/file/d/1D6Hum2uA41fWpAdI7tkDcgHjC7akaj4p/view",
    cats: ["Web"],
  },
  {
    title: "Smart Budget Manager",
    desc: "Frontend budget management tool with a clean, intuitive interface.",
    tags: ["React", "Frontend"],
    link: "https://smart-budget-manager-abi-demo.vercel.app/",
    cats: ["Web"],
  },
  {
    title: "DAV Senior Secondary School Site",
    desc: "Built with Team Darvis — official site for DAV Boys Senior Secondary School.",
    tags: ["Web", "Team"],
    link: "https://bgpm.davchennai.org/",
    cats: ["Web"],
  },
];

const cats: Cat[] = ["All", "Web", "AI", "Healthcare"];

export function Projects() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = projects.filter((p) => filter === "All" || p.cats.includes(filter));

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          // featured projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-8 text-4xl font-bold sm:text-5xl"
        >
          Things I've <span className="text-gradient">shipped</span>.
        </motion.h2>

        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                filter === c
                  ? "bg-gradient-primary text-primary-foreground shadow-[var(--shadow-glow-cyan)]"
                  : "glass glass-hover text-muted-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={p.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.08} glareColor="#22D3EE">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
                >
                  {p.featured && (
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
                      <Sparkles size={10} /> Featured
                    </div>
                  )}
                  <div
                    className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                    style={{ background: "var(--gradient-radial-cyan)" }}
                  />
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan">
                    View project <ExternalLink size={14} />
                  </div>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
