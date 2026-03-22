import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status: string;
  revision: string;
  index: number;
  github?: string;
  size?: "tall" | "wide" | "normal";
}

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const ProjectCard = ({ title, description, tags, status, revision, index, github, size = "normal" }: ProjectCardProps) => {
  const heightClass = size === "tall" ? "md:row-span-2 min-h-[340px]" : size === "wide" ? "md:col-span-2 min-h-[220px]" : "min-h-[220px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...transition, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`relative hud-panel p-6 group cursor-pointer overflow-hidden flex flex-col ${heightClass}`}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.1), hsl(var(--primary) / 0.15))",
          backgroundSize: "200% 200%",
          animation: "shimmer 3s ease infinite",
        }}
      />

      {/* Scanline on hover */}
      <div className="scanline-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header metadata */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <span className="text-[10px] text-muted-foreground tracking-widest tabular-nums">
          {revision}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-primary tracking-widest tabular-nums flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {status}
          </span>
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="View on GitHub"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative z-10 flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-1 border border-primary/20 text-primary/70 tracking-wider group-hover:border-primary/40 group-hover:text-primary/90 group-hover:shadow-[0_0_8px_hsla(190,100%,50%,0.15)] transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default ProjectCard;
