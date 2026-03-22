import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const skillRows = [
  {
    direction: "left" as const,
    skills: [
      { name: "React.js", icon: "⚛" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Node.js", icon: "⬡" },
      { name: "Express.js", icon: "⌘" },
      { name: "Python", icon: "🐍" },
      { name: "C / C++", icon: "⟨⟩" },
      { name: "Bash", icon: "$_" },
      { name: "HTML5", icon: "◇" },
      { name: "CSS3", icon: "◆" },
      { name: "Tailwind CSS", icon: "🌊" },
    ],
  },
  {
    direction: "right" as const,
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "⊞" },
      { name: "Supabase", icon: "⚡" },
      { name: "AWS", icon: "☁" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸" },
      { name: "REST APIs", icon: "⇄" },
      { name: "React Flow", icon: "⊶" },
      { name: "Git", icon: "⎇" },
      { name: "Problem Solving", icon: "🧠" },
      { name: "Adaptability", icon: "⟳" },
    ],
  },
];

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["C / C++", "Python", "JavaScript (ES6+)", "TypeScript", "Bash"],
  },
  {
    title: "FRONTEND",
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "React Flow"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "DATABASES",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "CLOUD_&_DEVOPS",
    skills: ["AWS (EC2, S3, VPC, Lambda, Cognito)", "Docker", "Kubernetes"],
  },
  {
    title: "SOFT_SKILLS",
    skills: ["Problem-Solving", "Project Management", "Adaptability", "Empathy"],
  },
];

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const InfiniteSlider = ({
  skills,
  direction,
}: {
  skills: { name: string; icon: string }[];
  direction: "left" | "right";
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;
    const totalWidth = el.scrollWidth / 2;

    const animate = () => {
      pos += direction === "left" ? 0.5 : -0.5;
      if (direction === "left" && pos >= totalWidth) pos = 0;
      if (direction === "right" && pos <= -totalWidth) pos = 0;
      el.style.transform = `translateX(${pos * -1}px)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [direction]);

  const duplicated = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden relative group">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div ref={scrollRef} className="flex gap-4 w-max will-change-transform">
        {duplicated.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex-shrink-0 hud-panel px-5 py-3.5 flex items-center gap-3 group/card cursor-default hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsla(190,100%,50%,0.2)]"
          >
            <span className="text-lg opacity-70 group-hover/card:opacity-100 transition-opacity">
              {skill.icon}
            </span>
            <span className="text-xs font-display tracking-widest text-foreground/80 group-hover/card:text-primary transition-colors whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" className="relative px-4 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-3 mb-12 px-4"
        >
          <div className="w-3 h-3 border border-accent/60 rotate-45" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            SKILLS_SECTION
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/30 to-transparent ml-4" />
        </motion.div>

        <div className="space-y-6">
          {skillRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.15 }}
            >
              <InfiniteSlider skills={row.skills} direction={row.direction} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            onClick={() => setShowAll(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hud-panel px-8 py-3 text-sm font-display tracking-widest text-primary hover:bg-primary/10 transition-colors cursor-pointer clip-notch border-primary/40"
          >
            [ VIEW_ALL_SKILLS ]
          </motion.button>
        </motion.div>

        {/* Faint digital noise background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Full Skills Overlay Panel */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-xl p-4"
            onClick={() => setShowAll(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
              className="relative hud-panel corner-brackets p-6 sm:p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 border border-primary/60 rotate-45" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-wider">
                    ALL_SYSTEM_SPECS
                  </h3>
                </div>
                <motion.button
                  onClick={() => setShowAll(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Categorized Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((cat, ci) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: ci * 0.08, duration: 0.4 }}
                    className="hud-panel p-5 group/cat"
                  >
                    <h4 className="text-[10px] tracking-widest font-display text-primary mb-4 pb-2 border-b border-primary/20">
                      // {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-3 py-1.5 border border-primary/20 text-foreground/80 tracking-wider hover:border-primary/50 hover:text-primary hover:shadow-[0_0_10px_hsla(190,100%,50%,0.15)] transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Close hint */}
              <div className="text-center mt-6">
                <span className="text-[10px] text-muted-foreground tracking-widest">
                  [ ESC OR CLICK OUTSIDE TO CLOSE ]
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;
