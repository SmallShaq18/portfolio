import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Floating Gradient Orb */}
      <motion.div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full 
                   bg-gradient-to-tr from-teal-400/40 via-cyan-400/30 to-purple-500/30 
                   blur-3xl"
        initial={{ y: 0, x: 0 }}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "20%", left: "50%", transform: "translateX(-50%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Abdulsamad Ibrahim
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-medium text-teal-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Typewriter
            words={[
              "Fullstack Developer",
              "React Enthusiast",
              "Tailwind Builder",
              "Node.js & Express",
              "MongoDB Expert",
              "REST API Developer",
              "UI/UX Focused",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I focus on building clean, interactive frontend experiences with strong UX fundamentals.
        </motion.p>
      </div>
    </section>
  );
}