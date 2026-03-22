import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const transition = { duration: 0.6, ease: [0.2, 0, 0, 1] };

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20 overflow-hidden">
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 z-10 pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 justify-center lg:justify-start"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs text-primary tabular-nums tracking-widest uppercase">
              System Status: Online
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-none mb-2"
          >
            <span className="text-glow">VAISHAKH</span>
            <br />
            <span className="text-primary text-glow">A</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.6 }}
            className="mb-4"
          >
            <span className="text-xs font-display tracking-[0.3em] text-accent">
              FULL STACK DEVELOPER
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.7 }}
            className="border-l-2 border-primary/40 pl-4 my-6 text-left"
          >
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed">
              &gt; I build scalable, high-performance web applications using modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hud-panel px-6 py-3 text-sm font-display tracking-widest text-primary hover:bg-primary/10 transition-colors cursor-pointer clip-notch"
            >
              [ VIEW_PROJECTS ]
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hud-panel px-6 py-3 text-sm font-display tracking-widest text-accent hover:bg-accent/10 transition-colors cursor-pointer border-accent/20"
            >
              [ CONTACT_ME ]
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 1.2 }}
            className="grid grid-cols-3 gap-4 mt-12 max-w-sm mx-auto lg:mx-0"
          >
            {[
              { label: "PROBLEMS_SOLVED", value: "300+" },
              { label: "REPOSITORIES", value: "40+" },
              { label: "SAAS_BUILT", value: "3+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary text-glow tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Holographic profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.5 }}
          className="relative flex-shrink-0 hologram-card-wrapper"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Outer aura glow */}
            <div className="absolute -inset-4 rounded-xl hologram-aura" />

            {/* Main card */}
            <div
              className="hologram-card relative w-56 sm:w-64 lg:w-72 rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Neon border */}
              <div className="absolute inset-0 rounded-xl border border-primary/30 z-20 pointer-events-none hologram-border" />

              {/* Profile image */}
              <img
                src={profileImg}
                alt="Vaishakh A"
                className="w-full h-full object-cover object-top relative z-0"
                style={{ filter: "brightness(0.97) contrast(1.03)" }}
                loading="eager"
              />

              {/* Scanline overlay — masked to edges */}
              <div className="absolute inset-0 z-10 pointer-events-none hologram-scanlines" />

              {/* Scan sweep light */}
              <div className="absolute inset-0 z-10 pointer-events-none hologram-sweep" />

              {/* Soft edge tint */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, hsl(var(--primary) / 0.06) 0%, transparent 20%, transparent 80%, hsl(var(--accent) / 0.06) 100%)",
                }}
              />

              {/* Glass overlay — very light */}
              <div className="absolute inset-0 bg-background/[0.05] z-10 pointer-events-none" />

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/50 backdrop-blur-sm border-t border-primary/20 px-3 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-primary/70 tracking-widest font-display">IDENTITY_VERIFIED</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                </div>
              </div>
            </div>

            {/* Corner brackets */}
            <div className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t border-l border-primary/40 rounded-tl-sm" />
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t border-r border-primary/40 rounded-tr-sm" />
            <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 border-b border-l border-primary/40 rounded-bl-sm" />
            <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b border-r border-primary/40 rounded-br-sm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
