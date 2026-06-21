import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Github, ArrowUp } from "lucide-react";
import { toast } from "sonner";

const info = [
  { Icon: MapPin, label: "Location", value: "Royapuram, Chennai, India", href: null },
  { Icon: Mail, label: "Email", value: "deepakdeepakrajr@gmail.com", href: "mailto:deepakdeepakrajr@gmail.com" },
  { Icon: WhatsAppIcon, label: "WhatsApp", value: "+91 6381687588", href: "https://wa.me/916381687588" },
  { Icon: Github, label: "GitHub", value: "github.com/deepaklog2", href: "https://github.com/deepaklog2" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setSending(true);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`);
    window.location.href = `mailto:deepakdeepakrajr@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
    }, 600);
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          // get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-4 text-4xl font-bold sm:text-5xl"
        >
          Have a project in mind?
        </motion.h2>
        <p className="mb-12 text-base text-muted-foreground sm:text-lg">
          Open to freelance work, collaborations, and interesting AI/full-stack problems. Let's talk.
        </p>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {info.map((it, i) => {
              const Inner = (
                <div className="glass glass-hover flex items-start gap-4 rounded-2xl p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/60">
                    <it.Icon size={18} className="text-cyan" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="mt-0.5 truncate text-sm text-foreground">{it.value}</div>
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {it.href ? (
                    <a href={it.href} target="_blank" rel="noopener noreferrer">
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="glass space-y-4 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <Field label="Message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
            <button
              type="submit"
              disabled={sending}
              className="bg-gradient-primary w-full rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-cyan)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Deepak Raj R. — Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/deepaklog2" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="glass glass-hover grid h-9 w-9 place-items-center rounded-full">
            <Github size={15} />
          </a>
          <a href="mailto:deepakdeepakrajr@gmail.com" aria-label="Email" className="glass glass-hover grid h-9 w-9 place-items-center rounded-full">
            <Mail size={15} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass glass-hover grid h-9 w-9 place-items-center rounded-full"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-cyan focus:bg-secondary/50 focus:shadow-[0_0_0_3px_oklch(0.78_0.16_200/0.15)]";
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={5} className={cls} placeholder={`Your ${label.toLowerCase()}…`} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={cls} placeholder={`Your ${label.toLowerCase()}…`} />
      )}
    </label>
  );
}

function WhatsAppIcon(props: { size?: number; className?: string }) {
  const s = props.size ?? 18;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={props.className}>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.7 2.7 4.2 3.7 1.5.6 2.1.7 2.8.6.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.8.8-3.1-.2-.3C3.9 14.7 3.5 13.4 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z" />
    </svg>
  );
}
