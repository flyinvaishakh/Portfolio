import { motion } from "framer-motion";
import { User, Target, Sparkles } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-3 h-3 border border-primary/60 rotate-45" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            ABOUT_ME
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="lg:col-span-3 space-y-6"
          >
            <div className="hud-panel corner-brackets p-6 group">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-4 h-4 text-primary/70" />
                <span className="text-[10px] tracking-widest font-display text-primary/70">
                  // PERSONAL_PROFILE
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                &gt; I'm <span className="text-foreground">Vaishakh A</span>, a passionate Full Stack Developer currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University. I specialize in building scalable, high-performance web applications using modern technologies like React, Next.js, Node.js, and cloud platforms.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &gt; With a strong foundation in data structures, algorithms, and system design, I enjoy solving complex problems and turning ideas into production-grade products. I've built multiple SaaS applications from scratch, contributing to both open-source and personal projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.1 }}
                className="hud-panel p-5 group"
              >
                <Target className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-display text-xs tracking-widest text-foreground mb-2">
                  CAREER_OBJECTIVE
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  To leverage my full-stack development skills in a dynamic team, contributing to innovative products while continuously growing as a software engineer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.2 }}
                className="hud-panel p-5 group"
              >
                <Sparkles className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-display text-xs tracking-widest text-foreground mb-2">
                  INTERESTS
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  AI/ML integrations, SaaS architecture, open-source development, competitive programming, and exploring emerging web technologies.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Animated visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
            className="lg:col-span-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-xs">
              <div className="hud-panel corner-brackets p-6 text-center">
                {/* Data display */}
                <div className="space-y-4">
                  {[
                    { label: "LOCATION", value: "India" },
                    { label: "DEGREE", value: "B.Tech CSE" },
                    { label: "UNIVERSITY", value: "LPU, Punjab" },
                    { label: "STATUS", value: "Open to Work" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...transition, delay: 0.3 + i * 0.1 }}
                      className="flex justify-between items-center border-b border-primary/10 pb-3 last:border-0"
                    >
                      <span className="text-[10px] tracking-widest font-display text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-xs font-display text-primary tracking-wider">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] tracking-widest font-display text-primary/70">
                    SYSTEM_ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
