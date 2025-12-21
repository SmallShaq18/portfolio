// src/components/Projects.jsx
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink, Github } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import movie from '../assets/images/movie.png';
import recipe from '../assets/images/recipe.png';
import todo from '../assets/images/todo.png';
//import todoFullstack from '../assets/images/todo-fullstack.png';
import saffire from '../assets/images/saffire.png';
import techGadgets from '../assets/images/tech-gadgets.png';
import blog from '../assets/images/blog.png';
import whosaid from '../assets/images/who-said.png';

export default function Projects() {
  const projects = [
    
    {
      title: "Task Management App",
      type: "Frontend",
      description: "A sleek, responsive task management app with a playful-themed UI. Users can add, edit, mark as complete, and delete tasks. Built to highlight clean UI/UX design and state management in React.",
      tech: ["React", "Bootstrap", "Vite", "LocalStorage"],
      github: "https://github.com/smallshaq18/todo-list",
      live: "https://todo-list-mu-nine-65.vercel.app/",
      image: todo
    },
    {
      title: "Movie Library",
      type: "Frontend",
      description: "A movie browsing platform powered by the TMDb API. Features include searching movies, filtering by genre, adding to watched and want to watch, pagination, and detailed movie pages. Focused on API integration, dynamic routing, and responsive design.",
      tech: ["React", "TMDB API", "Bootstrap", "Vite", "Framer Motion"],
      github: "https://github.com/smallshaq18/movie-lib",
      live: "https://movie-lib-zeta.vercel.app/",
      image: movie
    },
    {
      title: "E-commerce Platform",
      type: "Frontend",
      description: "A mock e-commerce site for tech products with a responsive Bootstrap grid layout. Features product listings, search, and categories using local JSON data. Highlights frontend commerce design and a modern shopping experience.",
      tech: ["React", "Bootstrap", "Vite", "Framer Motion"],
      github: "https://github.com/smallshaq18/tech-products",
      live: "https://tech-products-vvje.vercel.app/",
      image: techGadgets
    },
    {
      title: "Recipe Book",
      type: "Frontend",
      description: "A recipe management app where users can add, edit, and delete recipes with images (stored via localStorage in base64). Includes a styled hero section, background design, and smooth animations. Built to showcase CRUD functionality and persistence without a backend.",
      tech: ["React", "LocalStorage", "Bootstrap", "Vite"],
      github: "https://github.com/smallshaq18/recipe-book",
      live: "https://recipe-book-wqg8.vercel.app/",
      image: recipe
    },
    {
      title: "An Academy Website",
      type: "Frontend",
      description: "A site for an educational platform featuring catalogues and showcases; and responsive UI components.",
      tech: ["React", "CSS", "JavaScript (ES6+)", "Bootstrap", "Framer Motion", "Vite"],
      github: "https://github.com/smallshaq18/saffire-academy",
      live: "https://saffire-academy.vercel.app/",
      image: saffire
    },
    /*{
      title: "To-Do List App",
      type: "Fullstack",
      description: "A fullstack productivity app with user authentication, persistent tasks, and a clean Bootstrap-powered interface. Features signup/login, token-based auth, CRUD operations, and default tasks for new users. Built with the MERN stack to highlight fullstack development skills.",
      tech: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/SmallShaq18/todo-list-fullstack",
      live: "https://todo-frontend-part.vercel.app/",
      image: todoFullstack
    },*/
    {
      title: "Movie Blog",
      type: "Full Stack (MERN)",
      description: "A social-style blog app where users can share posts, drop comments, and bookmark favorites. Built with the MERN stack, featuring image uploads (Cloudinary), JWT auth, and responsive design. Basically my take on a clean, modern content-sharing platform.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Bootstrap"],
      github: "https://github.com/smallshaq18/blog-app",
      live: "https://blog-app-smoky-nu.vercel.app/",
      image: blog
    },
    {
      title: "Who Said",
      type: "Full Stack",
      description: "A fast-paced quote guessing game where players identify who said a line from popular anime and movies. Features include a countdown timer, lifelines, sound effects, animated transitions, themed modes, and dynamic backgrounds. Built to feel smooth, fun, and arcade-like while showcasing clean React + TypeScript architecture.",
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
      github: "https://github.com/smallshaq18/who-said",
      live: "https://who-said-omega.vercel.app/",
      image: whosaid
    },


  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-28 overflow-hidden"
    >

      
      {/* Subtle background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
<FeaturedProject />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 15 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center  max-w-2xl mx-auto mb-16"
        >

          

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Selected Projects
          </h2>
          <p className="text-white/70">
            A few projects where I focused on clean UI, solid architecture,
            responsiveness, and real-world functionality.
          </p>
        </motion.div>

        

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
  key={index}
  variants={item}
  className="group relative rounded-2xl overflow-hidden
             bg-white/5 border border-white/10
             hover:border-teal-400/40
             transition-colors"
>
  {/* Image */}
  <div className="relative h-48 overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="w-full h-full object-cover
                 group-hover:scale-105 transition-transform duration-500"
    />

    {/* Overlay (desktop only) */}
    <div
      className="absolute inset-0 bg-black/60
                 opacity-100 sm:opacity-0 group-hover:opacity-100
                 transition-opacity duration-300
                 "
    />

    
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col h-full">
    <h3 className="text-lg font-semibold text-teal-400 mb-1">
      {project.title}
    </h3>

    <span className="text-xs text-white/50 mb-3">
      {project.type}
    </span>

    <p className="text-sm text-white/70 leading-relaxed mb-4">
      {project.description}
    </p>

  <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="text-xs px-2 py-1 rounded-full
                     bg-white/10 text-white/70"
        >
          {tech}
        </span>
      ))}
    </div>
  

    {/* Floating Actions */}
    <div
      className="
        absolute top-4 right-4 flex gap-5
        opacity-100 translate-y-0
        md:opacity-0 md:-translate-y-2
        md:group-hover:opacity-100 md:group-hover:translate-y-0
        transition-all duration-300
        
      "
    >
      {/* Live Demo */}
      {project.live && (
        <div className="relative group/btn">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={48} className="text-white
             rounded-lg p-3
              bg-teal-400/50 backdrop-blur-md
              border border-teal-400/60
              hover:border-teal-200
              hover:shadow-[0_0_20px_rgba(45,212,191,0.6)]
              transition-all" />
          </a>

          {/* Mobile label */}
  <span className="text-sm text-white md:hidden">
    Live Demo
  </span>

          {/* Tooltip (desktop only) */}
          <span
            className="
              absolute top-7 left-1/2 -translate-x-1/2
              text-xs px-2 py-1 rounded-md
              bg-black/80 text-white
              opacity-0 group-hover/btn:opacity-100
              transition-opacity
              hidden md:block
            "
          >
            Live Demo
          </span>
        </div>
      )}

      {/* GitHub */}
      {project.github && (
        <div className="relative group/btn">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={48} className="text-white
             rounded-lg p-3
              bg-black backdrop-blur-md
              border border-teal-400/30
              hover:border-teal-300
              hover:shadow-[0_0_20px_rgba(45,212,191,0.6)]
              transition-all" />
          </a>

          {/* Mobile label */}
  <span className="text-sm text-white md:hidden">
    GitHub
  </span>

          {/* Tooltip */}
          <span
            className="
              absolute top-7 left-1/2 -translate-x-1/2
              text-xs px-2 py-1 rounded-md
              bg-black/80 text-white
              opacity-0 group-hover/btn:opacity-100
              transition-opacity
              hidden md:block
            "
          >
            GitHub
          </span>
        </div>
      )}
    </div>
  </div>
</motion.div>

          ))}
        </motion.div>
      </div>
    </section>
  );
}


import { Star } from "lucide-react";

function FeaturedProject() {
  const project = {
    title: "Movie Blog App",
    type: "Full-Stack (MERN)",
    description:
      "A social-style movie blog platform where users can create posts, comment, and bookmark favorites. Built with authentication, image uploads, and a clean, responsive UI; my take on a modern content-sharing experience.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT Auth",
      "Bootstrap",
    ],
    image: blog,
    live: "https://blog-app-smoky-nu.vercel.app/",
    github: "https://github.com/smallshaq18/blog-app",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        relative mb-10 mx-5
        rounded-3xl overflow-hidden
        bg-white/5 backdrop-blur-md
        border border-teal-400/30
        hover:border-teal-400/60
        transition-colors
      "
    >
      {/* Featured badge */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2
                      px-3 py-1 rounded-full
                      bg-teal-400/20 text-teal-300
                      text-xs font-semibold backdrop-blur-md">
        <Star size={20} />
        Featured Project
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover
                       hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Floating actions */}
          <div className="
            absolute bottom-6 left-6 flex gap-3
          ">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2 rounded-lg
                  bg-teal-400/70 text-black font-medium
                  hover:bg-teal-300
                  hover:shadow-[0_0_25px_rgba(45,212,191,0.7)]
                  transition-all
                "
              >
                <ExternalLink size={18} />
                <span className="text-sm">Live Demo</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2 rounded-lg
                  bg-white/10 text-white
                  border border-white/20
                  hover:border-white/40
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
                  transition-all
                "
              >
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-teal-400 mb-2">
            {project.title}
          </h3>

          <span className="text-sm text-white/50 mb-4">
            {project.type}
          </span>

          <p className="text-white/70 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  text-xs px-3 py-1 rounded-full
                  bg-white/10 text-white/70
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
