// src/components/Contact.jsx
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const contactMethods = [
    {
      type: "Email",
      value: "Ibrahim Abdulsamad",
      link: "mailto:abdulsamad.m1802472@st.futminna.edu.ng",
      icon: "✉️"
    },
    /*{
      type: "LinkedIn",
      value: "Abdulsamad Ibrahim",
      link: "https://linkedin.com/in/abdulsamad-ibrahim-964032237/",
      icon: "💼𝕏"
    },*/
    {
      type: "X (Formerly Twitter)",
      value: "thesmallShaq___",
      link: "https://x.com/thesmallshaq___",
      icon: "𝕏"
    },
    {
      type: "GitHub",
      value: "github.com/smallshaq18",
      link: "https://github.com/smallshaq18",
      icon: "🔗"
    },
    {
      type: "Location",
      value: "Nigeria",
      link: null,
      icon: "📍"
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container">
        <motion.h2
          className="fw-bold mb-4 text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          className="text-center mb-5 lead"
          style={{  lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
        </motion.p>

        <motion.div
          ref={ref}
          className="row g-4 justify-content-center"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {contactMethods.map((contact, index) => (
            <motion.div key={index} className="col-md-6 col-lg-3" variants={item}>
              <div className="text-center p-4 border border-secondary rounded-3 bg-black h-100">
                <div className="mb-3" style={{ fontSize: '2rem' }}>
                  {contact.icon}
                </div>
                <h6 className="text-info mb-2">{contact.type}</h6>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-light text-decoration-none"
                    target={contact.type === 'Email' ? '_self' : '_blank'}
                    rel={contact.type === 'Email' ? '' : 'noopener noreferrer'}
                    style={{ fontSize: '0.9rem', wordBreak: 'break-word' }}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-light" style={{ fontSize: '0.9rem' }}>
                    {contact.value}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://x.com/thesmallshaq___" target='_blank'
            className="btn btn-info btn-lg px-4"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}