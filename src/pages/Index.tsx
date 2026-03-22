import { motion } from "framer-motion";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";
import NavigationHUD from "@/components/NavigationHUD";
import SystemLog from "@/components/SystemLog";

const projects = [
  {
    title: "AUTOSCRAPE",
    description: "AI-powered web scraping platform with hybrid rule-based + AI extraction, Gemini-powered data processing, authentication, billing, scheduling, and improved scalability via SSR.",
    tags: ["NEXT.JS", "GEMINI AI", "SSR", "STRIPE"],
    status: "DEPLOYED",
    revision: "[REV_03]",
    github: "#",
    size: "tall" as const,
  },
  {
    title: "SYNTHIQ",
    description: "AI avatar video SaaS platform featuring AI-generated talking avatars, voice cloning, multilingual translation, lip-sync system, and a full dashboard-based SaaS interface.",
    tags: ["REACT", "AI/ML", "VOICE CLONING", "SAAS"],
    status: "ACTIVE",
    revision: "[REV_05]",
    github: "#",
    size: "normal" as const,
  },
  {
    title: "HIRELENS",
    description: "Remote interview platform with real-time video calling and chat, a split interface for DSA problem-solving alongside participant video, and a LeetCode-style coding practice dashboard.",
    tags: ["REACT", "WEBRTC", "DSA", "REAL-TIME"],
    status: "ACTIVE",
    revision: "[REV_01]",
    github: "#",
    size: "normal" as const,
  },

  // NEW PROJECTS

  {
    title: "USEPOPCORN",
    description: "Movie discovery web app similar to IMDb, allowing users to search, explore, and track movies with a clean UI and fast performance.",
    tags: ["REACT", "TAILWIND CSS", "API", "MOVIES"],
    status: "DEPLOYED",
    revision: "[REV_02]",
    github: "#",
    size: "normal" as const,
  },
  {
    title: "PROJECT MANAGER",
    description: "Full-stack project management system with task tracking, analytics dashboard, and scalable cloud deployment using AWS services.",
    tags: ["NEXT.JS", "REDUX", "NODE.JS", "AWS", "POSTGRESQL"],
    status: "ACTIVE",
    revision: "[REV_04]",
    github: "#",
    size: "tall" as const,
  },
  {
    title: "LMS PLATFORM",
    description: "Learning Management System with authentication, course management, payments integration, and smooth animations for enhanced UX.",
    tags: ["NEXT.JS", "REACT", "CLERK", "STRIPE", "FRAMER"],
    status: "ACTIVE",
    revision: "[REV_02]",
    github: "#",
    size: "normal" as const,
  },
  {
    title: "STORAGE MANAGEMENT",
    description: "Modern storage and file management system with real-time updates, authentication, and scalable backend powered by Appwrite.",
    tags: ["NEXT.JS 15", "REACT 19", "APPWRITE", "TYPESCRIPT", "SHADCN"],
    status: "ACTIVE",
    revision: "[REV_01]",
    github: "#",
    size: "normal" as const,
  },
  {
    title: "SOCIAL MEDIA PLATFORM",
    description: "Full-stack social media application with real-time interactions, authentication, and scalable architecture using MERN and Next.js.",
    tags: ["MERN", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "REAL-TIME"],
    status: "ACTIVE",
    revision: "[REV_03]",
    github: "#",
    size: "tall" as const,
  },
];

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden scroll-smooth">
      <GridBackground />
      <div className="scanline-overlay z-[1]" />
      <div className="grid-bg fixed inset-0 z-[1] pointer-events-none opacity-30" />

      <NavigationHUD />
      <SystemLog />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="relative px-4 py-20">
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
                PROJECT_MODULES
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} {...project} index={i} />
              ))}
            </div>
          </div>
        </section>

        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
