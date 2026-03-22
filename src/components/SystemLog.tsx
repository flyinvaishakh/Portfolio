import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const logMessages = [
  "> System initialized...",
  "> Loading portfolio modules...",
  "> Rendering HUD interface...",
  "> All systems nominal.",
  "> Awaiting user input...",
  "> Connection established.",
  "> Scanning project database...",
  "> Module: Projects loaded.",
  "> Module: Skills loaded.",
  "> Monitoring active...",
];

const SystemLog = () => {
  const [logs, setLogs] = useState<string[]>([logMessages[0]]);

  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-5), logMessages[i % logMessages.length]]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-4 left-4 z-50 max-w-xs hidden lg:block"
    >
      <div className="hud-panel p-3 corner-brackets">
        <div className="text-[10px] text-primary tracking-widest mb-2 font-display">
          SYS_LOG //
        </div>
        <div className="space-y-1">
          {logs.map((log, i) => (
            <div
              key={`${log}-${i}`}
              className={`text-[10px] tabular-nums transition-opacity duration-300 ${
                i === logs.length - 1 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {log}
            </div>
          ))}
        </div>
        <div className="mt-2 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
      </div>
    </motion.div>
  );
};

export default SystemLog;
