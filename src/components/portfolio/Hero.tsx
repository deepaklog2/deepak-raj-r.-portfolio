import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, ArrowDown } from "lucide-react";
import Tilt from "react-parallax-tilt";

const roles = ["Full Stack Developer", "AI Specialist", "UI/UX Enthusiast", "Music Composer"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-6"
          >
            // hi, i'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Deepak <br />
            <span className="text-gradient">Raj R.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex h-8 items-center gap-3"
          >
            <span className="h-px w-10 bg-cyan" />
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-mono text-base text-cyan sm:text-lg"
            >
              {roles[idx]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Based in Chennai, India — I build scalable, intelligent digital experiences across web,
            mobile, and AI. Self-taught since 13, hackathon-tested, shipping real products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="bg-gradient-primary rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-cyan)] transition-transform hover:-translate-y-0.5"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="glass glass-hover rounded-full px-6 py-3 text-sm font-semibold"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { Icon: Github, href: "https://github.com/deepaklog2", label: "GitHub" },
              { Icon: Mail, href: "mailto:deepakdeepakrajr@gmail.com", label: "Email" },
              { Icon: WhatsApp, href: "https://wa.me/916381687588", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover grid h-11 w-11 place-items-center rounded-full"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.1} glareColor="#22D3EE">
            <div className="glass animate-float relative overflow-hidden rounded-2xl p-6 shadow-[var(--shadow-card)]">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-amber/70" />
                <span className="h-3 w-3 rounded-full bg-cyan/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">~/portfolio.tsx</span>
              </div>
              <pre className="font-mono text-xs leading-relaxed sm:text-sm">
{`const dev = {
  name: "Deepak Raj R",
  role: ["full-stack", "AI"],
  stack: ["React", "Node",
          "Python", "TF"],
  location: "Chennai, IN",
  status: "building cool stuff",
  available: true,
};

export default dev;`.split("\n").map((line, i) => (
  <div key={i}>
    <span className="mr-3 inline-block w-5 text-right text-muted-foreground/40">{i + 1}</span>
    <span className="text-foreground">{line}</span>
  </div>
))}
              </pre>
              <div
                className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full opacity-50 blur-3xl"
                style={{ background: "var(--gradient-radial-cyan)" }}
              />
            </div>
          </Tilt>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}

function WhatsApp(props: { size?: number }) {
  const s = props.size ?? 18;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.7 2.7 4.2 3.7 1.5.6 2.1.7 2.8.6.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.8.8-3.1-.2-.3C3.9 14.7 3.5 13.4 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
    </svg>
  );
}
