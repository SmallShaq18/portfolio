// src/components/About.jsx
import { useEffect } from 'react';
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


