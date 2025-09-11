// src/components/Skills.jsx
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const skills = [
    'HTML5', 'CSS / SCSS', 'JavaScript (ES6+)',
    'React', 'Bootstrap', 'Node.js & Express', 'MongoDB',
    'REST API', 'Git / GitHub',
    'Responsive Design', 'API Integration',
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden'); // reset on exit
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="skills" className="py-5 bg-dark text-light">
      <div className="container">
        <motion.h2
          className="fw-bold mb-4 text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <motion.h5
          className="fw-bold mb-4 text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.5 }}
        >
          Here are the core technologies and tools I use to design and build responsive, user-friendly applications.
        </motion.h5>

        <motion.div
          ref={ref}
          className="row g-3 justify-content-center"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill) => (
            <motion.div key={skill} className="col-6 col-md-3 col-lg-2" variants={item}>
              <div className="border border-secondary rounded-3 p-3 text-center bg-black">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

