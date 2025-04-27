import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState('All');
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  const filterItem = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05 + 0.4,
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    }),
  };

  const cardHover = {
    scale: 1.03,
    y: -5,
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const imageHover = {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  const tagHover = {
    scale: 1.1,
    y: -2,
    background: 'var(--primary)',
    color: '#fff',
    transition: {
      type: 'spring',
      stiffness: 500,
    },
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio (React)',
      description:
        'A modern portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and responsive design showcasing my professional work.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.stockcake.com/public/2/5/2/2522e9fb-e32a-4727-a205-aa257cd6da3c_large/programming-cafe-vibes-stockcake.jpg',
      githubUrl: 'https://github.com/santhosh-thouda/portfolio-react',
      liveUrl: 'https://santhosh-thouda.github.io/portfolio-react',
    },
    {
      id: 2,
      title: 'Portfolio (HTML/CSS)',
      description:
        'My first portfolio website built with pure HTML, CSS, and JavaScript. Features responsive design, smooth scrolling, and project showcase section.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      githubUrl: 'https://github.com/santhosh-thouda/portfolio-html',
      liveUrl: 'https://santhosh-thouda.github.io/portfolio/',
    },
    {
      id: 3,
      title: 'Banking Management System',
      description:
        'A core banking system with account creation, deposit, withdrawal, balance inquiry, and money transfer. Integrated with MySQL via JDBC, using OOP principles and JUnit testing.',
      tags: ['Java', 'MySQL', 'JDBC', 'OOP'],
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQEDyCjKlGVL1A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693251468802?e=2147483647&v=beta&t=3khZUToP8SaIyQ1z2HwveMpBqO0O-V29m8muchXuvio',
      githubUrl: 'https://github.com/santhosh-thouda/BankingSystem',
    },
    {
      id: 4,
      title: 'Binary Search Visualization',
      description:
        'An interactive visualization of the Binary Search algorithm with real-time element highlighting and O(log n) time complexity display. Optimized for learning with animations.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      githubUrl: 'https://github.com/santhosh-thouda/Binary-Search-Visualization',
      liveUrl: 'https://santhosh-thouda.github.io/Binary-Search-Visualization/',
    },
    {
      id: 5,
      title: 'Currency Exchange',
      description:
        'A real-time Currency Exchange web app integrated with ExchangeRate-API. Features an intuitive UI with responsive design and error handling for API failures.',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'https://mtr-cdn.com/images/currency_exchange_rates.width-648.format-avif_0mgX2og.avif',
      githubUrl: 'https://github.com/santhosh-thouda/Currency-Exchange',
      liveUrl: 'https://santhosh-thouda.github.io/Currency-Exchange/',
    },
    {
      id: 6,
      title: 'Edutainment Platform',
      description:
        'An interactive platform combining education and entertainment. Includes LMS, tutorials, YouTube integration, and entertainment features like vlogs and music.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      image: 'https://elearningindustry.com/wp-content/uploads/2023/10/Shutterstock_2343572459.jpg',
      githubUrl: 'https://github.com/santhosh-thouda/edutainment',
    },
  ];

  // Curated filters to avoid niche tags and ensure relevant filtering
  const filters = ['All', 'React', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'MySQL', 'Tailwind CSS'];

  // Case-insensitive filtering
  const filteredProjects =
  activeFilter === 'All'
    ? projects
    : projects.filter((project) =>
        project.tags.some((tag) => {
          // Normalize both the tag and filter for better matching
          const normalizedTag = tag.toLowerCase().replace(/\s+/g, '');
          const normalizedFilter = activeFilter.toLowerCase().replace(/\s+/g, '');
          
          // Check if tag includes filter or vice versa for broader matching
          return normalizedTag.includes(normalizedFilter) || 
                 normalizedFilter.includes(normalizedTag);
        })
      );

  // Debug: Log filtered projects to console
  useEffect(() => {
    console.log(`Active Filter: ${activeFilter}, Filtered Projects:`, filteredProjects);
  }, [activeFilter, filteredProjects]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-neutral-light to-primary/10 dark:from-neutral-dark dark:to-primary-dark/20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-primary/20 dark:bg-primary-dark/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        className="absolute -right-40 bottom-20 w-96 h-96 rounded-full bg-secondary/20 dark:bg-secondary-dark/30 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.div
            variants={item}
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
          />
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-neutral-400 dark:text-neutral-300 max-w-3xl mx-auto"
          >
            A collection of my work showcasing development skills and creative problem-solving
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              custom={index}
              variants={filterItem}
              onClick={() => setActiveFilter(filter)}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all glass border border-neutral-200/20 dark:border-neutral-400/20 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-neutral-dark/50'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              layout
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={item}
                  whileHover={cardHover}
                  animate={floatingAnimation}
                  onHoverStart={() => setIsHovered(project.id)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="relative glass rounded-2xl overflow-hidden shadow-xl border border-neutral-200/20 dark:border-neutral-400/20 hover:border-primary transition-all cursor-pointer"
                  layout
                >
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                      transition: { duration: 6, repeat: Infinity },
                    }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
                  />
                  <motion.div
                    className="h-52 overflow-hidden relative"
                    whileHover={imageHover}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium text-sm">View Project</span>
                    </div>
                  </motion.div>

                  <div className="p-8 relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      {isHovered === project.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex space-x-2"
                        >
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-full glass flex items-center justify-center shadow-sm hover:shadow-md"
                          >
                            <FaGithub className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                          </motion.a>
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-8 h-8 rounded-full glass flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                              <FaExternalLinkAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </div>

                    <p className="text-neutral-400 dark:text-neutral-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-wrap gap-2 mb-6"
                    >
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={item}
                          whileHover={tagHover}
                          className="px-3 py-1 glass text-xs rounded-full text-gray-700 dark:text-gray-300 shadow-sm border border-neutral-200/20 dark:border-neutral-400/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    <div className="flex space-x-4 pt-2 border-t border-neutral-200/20 dark:border-neutral-400/20">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center text-sm text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary font-medium"
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        View Code
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="flex items-center text-sm text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary font-medium"
                        >
                          <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-12"
            >
              <p className="text-lg md:text-xl text-neutral-400 dark:text-neutral-300 mb-4">
                No projects found for the selected filter.
              </p>
              <motion.button
                onClick={() => setActiveFilter('All')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
              >
                Show All Projects
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;