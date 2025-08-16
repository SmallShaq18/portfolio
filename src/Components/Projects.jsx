// src/components/Projects.jsx
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import movie from '../assets/images/movie.png';
import recipe from '../assets/images/recipe.png';
import todo from '../assets/images/todo.png';
import saffire from '../assets/images/saffire.png';
import techGadgets from '../assets/images/tech-gadgets.png';

export default function Projects() {
  const projects = [
    
    {
      title: "Task Management App",
      description: "A sleek, responsive task management app with a playful-themed UI. Users can add, edit, mark as complete, and delete tasks. Built to highlight clean UI/UX design and state management in React.",
      tech: ["React", "Bootstrap", "Vite", "LocalStorage"],
      github: "https://github.com/smallshaq18/todo-list",
      live: "https://todo-list-mu-nine-65.vercel.app/",
      image: todo
    },
    {
      title: "Movie Library",
      description: "A movie browsing platform powered by the TMDb API. Features include searching movies, filtering by genre, adding to watched and want to watch, pagination, and detailed movie pages. Focused on API integration, dynamic routing, and responsive design.",
      tech: ["React", "TMDB API", "Bootstrap", "Vite", "Framer Motion"],
      github: "https://github.com/smallshaq18/movie-lib",
      live: "https://movie-lib-zeta.vercel.app/",
      image: movie
    },
    {
      title: "E-commerce Platform",
      description: "A mock e-commerce site for tech products with a responsive Bootstrap grid layout. Features product listings, search, and categories using local JSON data. Highlights frontend commerce design and a modern shopping experience.",
      tech: ["React", "Bootstrap", "Vite", "Framer Motion"],
      github: "https://github.com/smallshaq18/tech-products",
      live: "https://tech-products-vvje.vercel.app/",
      image: techGadgets
    },
    {
      title: "Recipe Book",
      description: "A recipe management app where users can add, edit, and delete recipes with images (stored via localStorage in base64). Includes a styled hero section, background design, and smooth animations. Built to showcase CRUD functionality and persistence without a backend.",
      tech: ["React", "LocalStorage", "Bootstrap", "Vite"],
      github: "https://github.com/smallshaq18/recipe-book",
      live: "https://recipe-book-wqg8.vercel.app/",
      image: recipe
    },
    {
      title: "An Academy Website",
      description: "A site for an educational platform featuring catalogues and showcases; and responsive UI components.",
      tech: ["React", "CSS", "JavaScript (ES6+)", "Bootstrap", "Framer Motion", "Vite"],
      github: "https://github.com/smallshaq18/saffire-academy",
      live: "https://saffire-academy.vercel.app/",
      image: saffire
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-5 bg-black text-light">
      <div className="container">
        <motion.h2
          className="fw-bold mb-5 text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.h5
          className="fw-bold mb-5 text-center"
          initial={{ opacity: 0, y: -18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: 0.5 }}
        >
          Here are some projects I’ve built to practice React, Bootstrap, API integration, and Responsive Design
        </motion.h5>
        
        <motion.div
          ref={ref}
          className="row g-4"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="col-md-6 col-lg-6" variants={item}>
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-info mb-3">{project.title}</h5>
                  <div>
                    <img src={project.image} alt='project.title' width='100%' height='100%' loading='lazy' />
                  </div>
                  <p className="text-info  small fw-light my-3" style={{ lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  
                  <div className="mb-3">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="badge bg-secondary me-2 mb-1"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.github}
                      className="btn btn-outline-light btn-sm me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.live}
                      className="btn btn-info btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

