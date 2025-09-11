import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="text-center py-5 bg-dark text-white">
      <div className="container">
        <motion.h1
          className="fw-bold display-4 mb-3 mt-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Abdulsamad Ibrahim
        </motion.h1>

        <motion.p
          className="lead fs-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <Typewriter
            words={[
              "Fullstack Developer",
              "React Enthusiast",
              "Bootstrap Specialist",
              "Node.js & Express",
              "MongoDB Expert",
              "REST API Developer",
              "UI/UX Builder",
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1200}
          />
        </motion.p>

        <motion.p
          className="mt-3 fst-italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: false }}
        >
          Building clean, functional, and responsive web applications with modern UI frameworks.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;




/*import profilePic from '../assets/images/profile.jpg';

function Hero() {
  return (
    <section className="text-center py-5">
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid white' }}
      />
      <h1 className="fw-bold">Abdulsamad Ibrahim</h1>
      <p className="lead">Frontend Developer | React & Bootstrap</p>
    </section>
  );
}

export default Hero;*/
