import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    score: "CGPA: 7.2",
    duration: "2023 – Present",
    icon: GraduationCap,
    color: "primary" as const,
  },
  {
    institution: "Vidya Jyothi PUC College",
    location: "Kolar, Karnataka",
    degree: "Intermediate",
    score: "Percentage: 78%",
    duration: "Completed",
    icon: BookOpen,
    color: "accent" as const,
  },
  {
    institution: "The Jain International School",
    location: "Bangarpet, Karnataka",
    degree: "Matriculation",
    score: "Percentage: 80.1%",
    duration: "Completed",
    icon: BookOpen,
    color: "primary" as const,
  },
];

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const EducationSection = () => {
  return (
    <section id="education" className="relative px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-3 h-3 border border-primary/60 rotate-45" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            EDUCATION_LOG
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-accent/20 to-primary/30" />
            <motion.div
              className="absolute w-full h-24 bg-gradient-to-b from-transparent via-primary to-transparent"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-10">
            {educationData.map((edu, i) => {
              const Icon = edu.icon;
              const isPrimary = edu.color === "primary";

              return (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...transition, delay: i * 0.15 }}
                  className="relative flex items-start gap-6 pl-16 md:pl-20"
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-8 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border backdrop-blur-sm ${
                        isPrimary
                          ? "border-primary/40 bg-background/80 shadow-[0_0_12px_hsla(190,100%,50%,0.3)]"
                          : "border-accent/40 bg-background/80 shadow-[0_0_12px_hsla(280,100%,70%,0.3)]"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isPrimary ? "text-primary" : "text-accent"}`} />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    className={`hud-panel p-5 w-full cursor-default group transition-all duration-300 ${
                      isPrimary
                        ? "hover:shadow-[0_0_20px_hsla(190,100%,50%,0.15)]"
                        : "hover:shadow-[0_0_20px_hsla(280,100%,70%,0.15)]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[9px] tracking-widest font-display px-2 py-0.5 border rounded-sm ${
                        isPrimary
                          ? "text-primary border-primary/30 bg-primary/5"
                          : "text-accent border-accent/30 bg-accent/5"
                      }`}>
                        {edu.duration}
                      </span>
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-foreground tracking-wide mb-1 group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">{edu.degree}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] tracking-widest ${isPrimary ? "text-primary/70" : "text-accent/70"}`}>
                        {edu.location}
                      </span>
                      <span className="text-[10px] tracking-widest font-display text-foreground/70">
                        {edu.score}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
