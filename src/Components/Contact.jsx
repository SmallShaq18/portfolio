import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      type: "Email",
      //value: "abdulsamad.m1802472@st.futminna.edu.ng",
      link: "mailto:abdulsamad.m1802472@st.futminna.edu.ng",
      icon: Mail,
      accent: "teal",
    },
    {
      type: "LinkedIn",
      //value: "Abdulsamad Ibrahim",
      link: "https://linkedin.com/in/abdulsamad-ibrahim-964032237/",
      icon: Linkedin,
      accent: "blue",
    },
    {
      type: "X",
      //value: "@thesmallshaq___",
      link: "https://x.com/thesmallshaq___",
      icon: Twitter,
      accent: "white",
    },
    {
      type: "GitHub",
      //value: "github.com/smallshaq18",
      link: "https://github.com/smallshaq18",
      icon: Github,
      accent: "gray",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.02 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2
                        w-[500px] h-[500px]
                        bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-center text-white/70 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          I’m always open to discussing new opportunities, interesting projects,
          or just connecting with fellow developers and having a good tech conversation.
          Feel free to reach out!
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactMethods.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                className="
                  group relative rounded-2xl p-6
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  hover:border-white/30
                  transition-all
                  hover:-translate-y-1
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity
                    shadow-[0_0_30px_rgba(45,212,191,0.25)]
                  "
                />

                <div className="relative z-10 text-center">
                  <Icon
                    size={28}
                    className="mx-auto mb-4 text-teal-300
                               group-hover:scale-110 transition-transform"
                  />

                  <h4 className="font-semibold mb-1">{contact.type}</h4>

                  {/*<p className="text-sm text-white/70 break-all">
                    {contact.value}
                  </p>*/}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://x.com/thesmallshaq___"
            target="_blank"
            className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-full
              bg-teal-400 text-black font-semibold
              hover:bg-teal-300
              hover:shadow-[0_0_30px_rgba(45,212,191,0.6)]
              transition-all
            "
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}