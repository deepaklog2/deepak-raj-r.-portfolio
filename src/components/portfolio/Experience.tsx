import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Briefcase } from "lucide-react";

const items = [
  {
    role: "Founder",
    org: "Floctet Technologies",
    period: "2024 — 2026",
    badge: "Freelance",
    desc: "Founded and led a tech company offering affordable IT services — web development, mobile apps, and digital marketing. (Site not currently running.)",
    icon: Briefcase,
  },
  {
    role: "Team Coordinator & Technical Lead",
    org: "School Jarvis",
    period: "2024 — 2025",
    badge: "Lead",
    desc: "Spearheaded technical projects and team operations. Led development initiatives and coordinated cross-functional teams to ship on time.",
    icon: Briefcase,
  },
  {
    role: "Website Developer",
    org: "School Darvis Team",
    period: "2024 — 2025",
    badge: "Dev",
    link: "https://bgpm.davchennai.org/",
    desc: "Managed the school website end-to-end — implemented new features, ensured performance, and shipped security updates.",
    icon: Briefcase,
  },
  {
    role: "B.Tech, Electronics & Communication",
    org: "SRM Institute of Science & Technology",
    period: "In progress — 2nd Year",
    badge: "Education",
    desc: "Currently pursuing my undergraduate degree while building products, leading teams, and competing in hackathons.",
    icon: GraduationCap,
  },
  {
    role: "Class 12 (CBSE)",
    org: "DAV Boys Senior Secondary School, Gopalapuram",
    period: "Graduated 2025",
    badge: "Education",
    desc: "Completed Class 12 under CBSE while actively building real-world projects on the side.",
    icon: GraduationCap,
  },
  {
    role: "Self-Taught Programming",
    org: "Started at age 13",
    period: "2018 — Present",
    badge: "Education",
    desc: "Picked up languages, frameworks, and full-stack architecture through projects, docs, and a lot of late nights.",
    icon: GraduationCap,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          // experience & education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-16 text-4xl font-bold sm:text-5xl"
        >
          The <span className="text-gradient">timeline</span>.
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/60 via-violet/60 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-12">
            {items.map((it, i) => {
              const Icon = it.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className={`relative grid items-start gap-4 pl-12 md:grid-cols-2 md:gap-12 md:pl-0 ${
                    left ? "" : ""
                  }`}
                >
                  <div className="absolute left-4 top-4 -translate-x-1/2 md:left-1/2">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-background ring-2 ring-cyan">
                      <Icon size={14} className="text-cyan" />
                    </div>
                  </div>

                  <div className={left ? "md:col-start-1 md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}>
                    <div className="glass glass-hover rounded-2xl p-5">
                      <div className={`flex flex-wrap items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-violet">
                          {it.badge}
                        </span>
                        <span className="text-muted-foreground/50">·</span>
                        <span className="font-mono text-xs text-muted-foreground">{it.period}</span>
                      </div>
                      <h3 className="font-display mt-2 text-lg font-semibold">{it.role}</h3>
                      <p className="text-sm text-cyan">{it.org}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                      {it.link && (
                        <a
                          href={it.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-3 inline-flex items-center gap-1 text-xs text-cyan hover:underline ${
                            left ? "md:justify-end" : ""
                          }`}
                        >
                          Visit site <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
