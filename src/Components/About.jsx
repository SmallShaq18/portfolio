import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TechOrb from "./TechOrbs";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative bg-black text-white py-10 overflow-hidden"
    >
      {/* Floating Orb – Right Side */}
      <motion.div
        className="absolute right-[-120px] top-1/2 -translate-y-1/2
                   w-80 h-80 md:w-[420px] md:h-[420px]
                   rounded-full blur-3xl
                   bg-gradient-to-tr from-teal-400/40 via-cyan-400/30 to-purple-500/30"
        animate={{ y: [0, -40, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl text-center sm:text-left font-bold mb-6 tracking-tight"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-white/80 leading-relaxed"
            >
              I’m a{" "}
              <span className="text-teal-400 font-medium">
                Fullstack Developer
              </span>{" "}
              who builds clean, user-friendly, functional, and responsive web
              applications. With{" "}
              <span className="text-teal-300">React</span>,{" "}
              <span className="text-teal-300">TypeScript</span>,{" "}
              <span className="text-teal-300">Tailwind</span>,{" "}
              <span className="text-teal-300">Node.js</span>,{" "}
              <span className="text-teal-300">Express</span>, and{" "}
              <span className="text-teal-300">MongoDB</span>, I turn ideas into
              polished digital experiences that feel just as good as they look.
            </motion.p>
          </div>

          {/* Tech Orb */}
          <div className="hidden md:block">
          <TechOrb />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// src/components/About.jsx
/*import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {

  

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden'); // reset so it can animate again next time
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-5 bg-black text-light">
      <div className="container text-center">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 className="fw-bold mb-4" variants={item}>
            About Me
          </motion.h2>

          <motion.p
            className="lead mx-auto"
            style={{ maxWidth: 720, lineHeight: 1.8 }}
            variants={item}
          >
            I’m a <span className="text-info">Fullstack Developer</span> who builds
            clean, user-friendly, functional and responsive web apps. With{' '}
            <span className="text-warning">React</span>, {' '}
            <span className="text-warning">Typescript</span>, {' '}
            <span className="text-warning">Bootstrap</span>, {' '}
            <span className="text-warning">Tailwind</span>, {' '}
            <span className="text-warning">Node.js</span>, {' '}
            <span className="text-warning">Express</span> and {' '}
            <span className="text-warning">MongoDB</span>, I bring ideas to life
            as polished digital experiences.
          </motion.p>
        </motion.div>
      </div>
      
    </section>
  );
}
*/

