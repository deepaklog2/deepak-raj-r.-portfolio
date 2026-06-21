import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border/50" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => go("home")} className="font-display text-xl font-bold tracking-tight">
            <span className="text-gradient">DR</span>
            <span className="text-foreground">.</span>
          </button>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative font-mono text-xs uppercase tracking-wider transition-colors ${
                  active === l.id ? "text-cyan" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 h-px w-full bg-gradient-primary"
                  />
                )}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <button
              onClick={() => go("contact")}
              className="bg-gradient-primary rounded-full px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow-cyan)] transition-transform hover:-translate-y-0.5"
            >
              Let's Talk
            </button>
          </div>
          <button onClick={() => setOpen(true)} className="text-foreground md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 text-foreground">
              <X size={28} />
            </button>
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(l.id)}
                className="font-display text-3xl font-semibold"
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
