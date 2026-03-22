import { motion } from "framer-motion";
import { Trophy, GitBranch, Layers, Zap, Crown, Activity } from "lucide-react";

const achievements = [
  {
    title: "300+ DSA Problems Solved",
    description: "Consistent problem-solving across LeetCode, CodeForces, and other competitive platforms.",
    icon: Trophy,
    stat: "300+",
  },
  {
    title: "50+ GitHub Repositories",
    description: "Open-source contributions and personal projects spanning full-stack development.",
    icon: GitBranch,
    stat: "50+",
  },
  {
    title: "3+ SaaS Applications Built",
    description: "Production-grade SaaS platforms with auth, billing, and scalable architecture.",
    icon: Layers,
    stat: "3+",
  },
  {
    title: "Top 0.2% Chess Player",
    description: "Ranked among the top 0.2% players globally on Chess.com, demonstrating strong strategic thinking and consistency.",
    icon: Crown, // or Trophy if you don’t have Crown
    stat: "Top 0.2%",
  },
  {
    title: "U16 KSCA Cricket Player",
    description: "Represented at the U16 level under KSCA, showcasing competitive sports experience and teamwork.",
    icon: Activity, // or use something like Target / Flame / Medal
    stat: "U16",
  },
];

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-3 h-3 border border-accent/60 rotate-45" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            MILESTONES_UNLOCKED
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...transition, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative hud-panel p-6 group cursor-default overflow-hidden text-center"
              >
                {/* Glow pulse background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />

                {/* Badge icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.15 + 0.2 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg border border-accent/30 bg-accent/5 flex items-center justify-center group-hover:shadow-[0_0_20px_hsla(280,100%,70%,0.3)] transition-shadow duration-500"
                >
                  <Icon className="w-7 h-7 text-accent" />
                </motion.div>

                {/* Stat */}
                <div className="text-3xl font-display font-bold text-accent text-glow-accent mb-2">
                  {item.stat}
                </div>

                {/* Title */}
                <h3 className="font-display text-sm font-bold text-foreground tracking-wider mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Unlocked badge */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <Zap className="w-3 h-3 text-accent/60" />
                  <span className="text-[9px] tracking-widest font-display text-accent/60">
                    UNLOCKED
                  </span>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
