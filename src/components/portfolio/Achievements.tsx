import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";

type Placement = "1st" | "2nd" | "3rd" | "Finalist" | "Participant";

const items: Array<{ title: string; event: string; placement: Placement; desc: string }> = [
  { title: "SV Scientifica '24", event: "AI Development", placement: "3rd", desc: "Innovative AI solution for environmental applications." },
  { title: "ATL Tinker Fest", event: "AI App Development · Sneh International School", placement: "1st", desc: "Top placement in the AI app development track." },
  { title: "Codessey '24", event: "CodeFusion", placement: "1st", desc: "First prize in a competitive coding challenge." },
  { title: "Culturals Hackathon", event: "Chettinad Vidyashram", placement: "3rd", desc: "Third place in a school-level hackathon." },
  { title: "Geek Out Trivia", event: "Anna University, CS Dept.", placement: "2nd", desc: "Second prize in a tech trivia competition." },
  { title: "Vidya Mandir Culturals", event: "App Development", placement: "2nd", desc: "Second prize in the app development category." },
  { title: "IIT Mandi · FrostHack 2025", event: "AI Finance Tracker (Fetch.ai, Pathway)", placement: "Participant", desc: "Built an AI-integrated Streamlit finance tracker." },
  { title: "NIT · Roboweek 3.0 2025", event: "FLICK-IT", placement: "Finalist", desc: "AI-integrated all-in-one web & mobile app." },
  { title: "ITM Gwalior Singlethon 2025", event: "HireGenius", placement: "Finalist", desc: "AI resume screening & job-matching app." },
];

const placementStyles: Record<Placement, { ring: string; text: string; icon: typeof Trophy }> = {
  "1st": { ring: "ring-amber/60", text: "text-amber", icon: Trophy },
  "2nd": { ring: "ring-foreground/50", text: "text-foreground", icon: Medal },
  "3rd": { ring: "ring-orange-400/60", text: "text-orange-300", icon: Medal },
  Finalist: { ring: "ring-violet/60", text: "text-violet", icon: Award },
  Participant: { ring: "ring-cyan/40", text: "text-cyan", icon: Award },
};

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          // achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-12 text-4xl font-bold sm:text-5xl"
        >
          Wins along <span className="text-gradient">the way</span>.
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const s = placementStyles[it.placement];
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass glass-hover relative overflow-hidden rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`grid h-10 w-10 place-items-center rounded-xl bg-secondary/60 ring-1 ${s.ring}`}>
                    <Icon size={18} className={s.text} />
                  </div>
                  <span className={`rounded-full bg-secondary/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${s.text}`}>
                    {it.placement}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-base font-semibold">{it.title}</h3>
                <p className="mt-0.5 text-xs text-cyan">{it.event}</p>
                <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
