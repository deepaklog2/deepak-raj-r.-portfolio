import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", value: 92 },
      { name: "JavaScript", value: 85 },
      { name: "React", value: 80 },
      { name: "Vue.js", value: 75 },
      { name: "Tailwind CSS", value: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", value: 83 },
      { name: "Python", value: 79 },
      { name: "Express.js", value: 81 },
      { name: "MongoDB", value: 75 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", value: 78 },
      { name: "Flutter", value: 72 },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "TensorFlow", value: 70 },
      { name: "PyTorch", value: 65 },
      { name: "NLP", value: 72 },
    ],
  },
];

const chips = [
  "React", "Next.js", "Vue", "Tailwind", "TypeScript",
  "Node.js", "Express", "Python", "MongoDB", "PostgreSQL",
  "React Native", "Flutter", "TensorFlow", "PyTorch", "Streamlit",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          // tech stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-12 text-4xl font-bold sm:text-5xl"
        >
          Tools I <span className="text-gradient">build with</span>.
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display mb-5 text-lg font-semibold text-cyan">{g.title}</h3>
              <div className="space-y-4">
                {g.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between font-mono text-xs">
                      <span className="text-foreground">{s.name}</span>
                      <span className="text-muted-foreground">{s.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                        className="bg-gradient-primary h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {chips.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass glass-hover rounded-full px-4 py-1.5 font-mono text-xs"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
