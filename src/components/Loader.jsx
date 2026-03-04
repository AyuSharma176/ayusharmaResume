import { motion } from "framer-motion";
import { useEffect } from "react";
import { themes, defaultTheme } from "../themes";

export default function Loader() {
  // Apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || defaultTheme;
    const theme = themes[savedTheme];
    
    if (theme) {
      Object.entries(theme.colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--color-${key}`, value);
      });
    }
  }, []);

  const hexagonVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "200%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: 0,
      },
    },
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0, filter: "blur(10px)" },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.6 + i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom right, var(--color-background), var(--color-surface), var(--color-background))' }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(to bottom right, var(--color-primary), var(--color-secondary), var(--color-accent))` }}></div>

      {/* Floating shapes matching website theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.2 }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float [animation-delay:1s]" style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.2 }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl animate-float [animation-delay:2s]" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.2 }}></div>
      </div>

      {/* Rotating ring with cyan/blue gradient */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
        animate={{
          scale: 1,
          opacity: [0, 0.6, 0.4],
          rotate: 360,
        }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full border-2"
        style={{ borderColor: 'var(--color-primary)', opacity: 0.3 }}
      />

      {/* Inner decorative hexagon frame */}
      <motion.div
        variants={hexagonVariants}
        initial="initial"
        animate="animate"
        className="absolute"
      >
        <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-30">
          <defs>
            <linearGradient id="cyanBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <polygon
            points="100,20 180,60 180,140 100,180 20,140 20,60"
            fill="none"
            stroke="url(#cyanBlueGradient)"
            strokeWidth="2"
          />
          <polygon
            points="100,40 160,70 160,130 100,160 40,130 40,70"
            fill="none"
            stroke="url(#cyanBlueGradient)"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Main monogram with cyan/blue/purple styling */}
      <div className="relative z-10">
        <div className="relative overflow-hidden">
          <div className="flex items-baseline justify-center gap-1">
            {["A", "S"].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className="text-8xl font-black tracking-wider relative"
                style={{ color: 'var(--color-text)', textShadow: '0 0 40px var(--color-primary), 0 0 80px var(--color-secondary)' }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              custom={2}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="text-6xl font-black mb-2 bg-gradient-to-br bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary), var(--color-accent))', textShadow: '0 0 40px var(--color-accent)' }}
            >
              .
            </motion.span>
          </div>

          {/* Cyan shimmer effect */}
          <motion.div
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
            style={{ background: `linear-gradient(90deg, transparent, var(--color-primary), var(--color-secondary), transparent)` }}
          />
        </div>

        {/* Gradient underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-1 w-40 mx-auto mt-8 rounded-full origin-center"
          style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary), var(--color-accent))' }}
        />
      </div>

      {/* Animated loading dots */}
      <motion.div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: i === 0 ? 'var(--color-primary)' : i === 1 ? 'var(--color-secondary)' : 'var(--color-accent)',
              boxShadow: `0 0 10px ${i === 0 ? 'var(--color-primary)' : i === 1 ? 'var(--color-secondary)' : 'var(--color-accent)'}`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
