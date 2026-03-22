import { motion } from "framer-motion";
import { useState } from "react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const contactLinks = [
  { label: "EMAIL", value: "vaishakh013@gmail.com", href: "mailto:vaishakh013@gmail.com", icon: "✉" },
  { label: "GITHUB", value: "github.com/flyinvaishakh", href: "https://github.com/flyinvaishakh", icon: "⌘" },
  { label: "LINKEDIN", value: "linkedin.com/in/vaishakh-a", href: "https://www.linkedin.com/in/vaishakh-a-64666a297/", icon: "◈" },
  { label: "PHONE", value: "+91-7676839625", href: "tel:+917676839625", icon: "☎" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:vaishakh013@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="relative px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/40" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            ESTABLISH_CONNECTION
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <p className="text-muted-foreground text-sm mb-6">
              &gt; Ready to collaborate? Open a secure channel and let's build something extraordinary.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="hud-panel corner-brackets p-4 cursor-pointer group block"
                >
                  <div className="text-2xl mb-2 group-hover:text-glow">{link.icon}</div>
                  <div className="text-[10px] text-primary tracking-widest font-display mb-1">
                    {link.label}
                  </div>
                  <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors break-all">
                    {link.value}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
            className="hud-panel p-6 corner-brackets space-y-4"
          >
            <div className="text-[10px] text-primary tracking-widest font-display mb-2">
              // SEND_MESSAGE
            </div>
            <input
              type="text"
              placeholder="> Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background/50 border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-mono"
            />
            <input
              type="email"
              placeholder="> Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background/50 border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-mono"
            />
            <textarea
              placeholder="> Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background/50 border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-mono resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hud-panel px-6 py-3 text-sm font-display tracking-widest text-primary hover:bg-primary/10 transition-colors cursor-pointer clip-notch w-full"
            >
              [ TRANSMIT_MESSAGE ]
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-primary/10 text-center"
        >
          <p className="text-[10px] text-muted-foreground tracking-widest">
            PORTFOLIO_OS v2.0.26 // ALL SYSTEMS NOMINAL // © 2026 VAISHAKH A
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
