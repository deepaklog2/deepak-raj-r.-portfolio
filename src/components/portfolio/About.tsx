import { motion } from "framer-motion";
import { Music } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";


const stats = [
  { label: "Year B.Tech", value: "2nd" },
  { label: "Hackathons", value: "10+" },
  { label: "Coding Since", value: "13" },
  { label: "Company Founded", value: "1" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          // about me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-12 text-4xl font-bold sm:text-5xl"
        >
          A developer who <span className="text-gradient">builds & ships</span>.
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-sm"
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-60 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="glass relative grid h-full place-items-center overflow-hidden rounded-3xl">
              <img
                src={profileAsset.url}
                alt="Deepak Raj R"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 flex items-center gap-2 rounded-full glass px-3 py-2">
                <Music size={14} className="text-cyan" />
                <span className="font-mono text-xs">Music Composer for Short Films</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I'm a full-stack developer & UI/UX enthusiast based in Chennai, India, with a strong
                foundation across the frontend and backend. I love turning complex ideas into clean,
                fast, intentional interfaces.
              </p>
              <p>
                Currently in my 2nd year of B.Tech in Electronics & Communication at SRM Institute
                of Science & Technology. Active in tech communities and hackathons — self-taught
                since age 13, and still learning every single day.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass glass-hover rounded-xl p-4 text-center"
                >
                  <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
