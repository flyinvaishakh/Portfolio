import { motion } from "framer-motion";
import { Download, FileText, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const resumeData = {
  contact: [
    { icon: Mail, label: "vaishakh013@gmail.com" },
    { icon: Phone, label: "+91-7676839625" },
    { icon: MapPin, label: "India" },
  ],
  objective:
    "Motivated Full Stack Developer seeking opportunities to apply my expertise in React, Next.js, Node.js, and cloud technologies to build scalable, high-performance applications that drive business value.",
  skills: ["React.js", "Next.js", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB", "PostgreSQL"],
};

const ResumeSection = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Vaishakh_A_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="relative px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-3 h-3 border border-primary/60 rotate-45" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            RESUME
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left — Resume card with download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="hud-panel corner-brackets p-6 flex flex-col items-center text-center"
          >
            <div className="w-20 h-24 hud-panel flex items-center justify-center border-primary/30 mb-4">
              <FileText className="w-9 h-9 text-primary/70" />
            </div>
            <h3 className="font-display text-sm font-bold text-foreground tracking-wider mb-1">
              VAISHAKH_A
            </h3>
            <span className="text-[10px] text-muted-foreground tracking-widest mb-6">
              FULL STACK DEVELOPER
            </span>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full hud-panel px-6 py-3 text-sm font-display tracking-widest text-primary hover:bg-primary/10 transition-colors cursor-pointer clip-notch border-primary/40 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              [ DOWNLOAD ]
            </motion.button>
          </motion.div>

          {/* Right — Resume summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact */}
            <div className="hud-panel p-5">
              <h4 className="text-[10px] tracking-widest font-display text-primary mb-3 pb-2 border-b border-primary/20">
                // CONTACT_INFO
              </h4>
              <div className="flex flex-wrap gap-4">
                {resumeData.contact.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-primary/60" />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Objective */}
            <div className="hud-panel p-5">
              <h4 className="text-[10px] tracking-widest font-display text-primary mb-3 pb-2 border-b border-primary/20">
                // CAREER_OBJECTIVE
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {resumeData.objective}
              </p>
            </div>

            {/* Key Skills */}
            <div className="hud-panel p-5">
              <h4 className="text-[10px] tracking-widest font-display text-primary mb-3 pb-2 border-b border-primary/20">
                // KEY_SKILLS
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-3 py-1 border border-primary/20 text-primary/70 tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
