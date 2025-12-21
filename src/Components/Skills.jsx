import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS / SCSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Tailwind",
    "Bootstrap",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
  ];

  /*const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };*/

  const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills">
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative p-5"
    >
      <h3 className="text-xl text-center font-semibold mb-4 text-white">
        Core Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={item}
            className="rounded-xl border border-white/10 bg-white/5
                       px-3 py-5 text-sm text-white/80
                       hover:border-teal-400/40 hover:text-teal-300
                       transition-colors"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
    </section>
  );
}
