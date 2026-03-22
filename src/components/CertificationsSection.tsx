import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certifications = [
  {
    title: "The Complete JavaScript Course 2025",
    issuer: "Udemy",
    image: "/Javascript.png",
  },
  {
    title: "Node.js, Express, MongoDB Bootcamp",
    issuer: "Udemy",
    image: "/NodeJs.png",
  },
  {
    title: "The Ultimate React Course 2025",
    issuer: "Udemy",
    image: "/UltimateReact.png",
  },
  {
    title:"The Complete 2024 Web Developer Bootcamp",
    issuer:"Udemy",
    image:"/Bootcamp.png"
  }
];

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const CertificationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Infinite scroll animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;
    const totalWidth = el.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        pos += 0.3;
        if (pos >= totalWidth) pos = 0;
        el.style.transform = `translateX(${-pos}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const duplicated = [...certifications, ...certifications, ...certifications, ...certifications];

  return (
    <section id="certifications" className="relative px-4 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-3 h-3 border border-primary/60 rotate-45" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            CERTIFICATIONS
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
        </motion.div>

        {/* Infinite certificate carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-6 w-max will-change-transform">
              {duplicated.map((cert, i) => (
                <motion.div
                  key={`${cert.title}-${i}`}
                  whileHover={{ scale: 1.03, y: -4 }}
                  onClick={() => setSelectedCert(cert)}
                  className="flex-shrink-0 w-72 sm:w-80 hud-panel overflow-hidden cursor-pointer group"
                >
                  {/* Certificate preview image */}
                  <div className="relative h-44 bg-secondary/30 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                    {/* Hologram scanline overlay */}
                    <div className="absolute inset-0 hologram-scanlines opacity-30 pointer-events-none" />
                    <div className="absolute inset-0 hologram-sweep opacity-50 pointer-events-none" />
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
                    {/* View label */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] font-display tracking-widest text-primary bg-background/70 px-4 py-2 backdrop-blur-sm border border-primary/30">
                        [ VIEW_CERTIFICATE ]
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-3.5 h-3.5 text-primary/70" />
                      <span className="text-[9px] tracking-widest font-display text-primary/70">
                        CERTIFICATION
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground tracking-wide group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-[10px] tracking-widest text-muted-foreground">
                      {cert.issuer}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full preview modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-xl p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative hud-panel corner-brackets p-4 max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-sm tracking-widest text-primary">
                  {selectedCert.title}
                </h3>
                <motion.button
                  onClick={() => setSelectedCert(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="relative rounded overflow-hidden">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 hologram-scanlines opacity-20 pointer-events-none" />
              </div>
              <div className="mt-3 text-[10px] text-muted-foreground tracking-widest text-center">
                ISSUED BY: {selectedCert.issuer}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
