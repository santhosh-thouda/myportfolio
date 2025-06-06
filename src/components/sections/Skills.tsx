import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faJs, faReact, faBootstrap,
  faJava, faPhp, faNodeJs, faGitAlt, faGitlab,
  faGithub, faAngular, faWordpress, faPython
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase, faBrain, faRobot, faFileCode,
  faGlobe, faServer, faTools, faLayerGroup,
  faLeaf, faTable, faFile
} from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'databases' | 'tools' | 'others';
  icon: React.ReactNode;
  color: string;
};

type Category = {
  id: Skill['category'];
  name: string;
  icon: React.ReactNode;
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const controls = useAnimation();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  useEffect(() => {
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', category: 'frontend', icon: <FontAwesomeIcon icon={faHtml5} />, color: '#E44D26' },
    { name: 'JavaScript', category: 'frontend', icon: <FontAwesomeIcon icon={faJs} />, color: '#F7DF1E' },
    { name: 'TypeScript', category: 'frontend', icon: <FontAwesomeIcon icon={faFileCode} />, color: '#3178C6' },
    { name: 'React.js', category: 'frontend', icon: <FontAwesomeIcon icon={faReact} />, color: '#61DAFB' },
    { name: 'Angular', category: 'frontend', icon: <FontAwesomeIcon icon={faAngular} />, color: '#DD0031' },
    { name: 'Bootstrap', category: 'frontend', icon: <FontAwesomeIcon icon={faBootstrap} />, color: '#7952B3' },
    // Backend
    { name: 'Node.js', category: 'backend', icon: <FontAwesomeIcon icon={faNodeJs} />, color: '#339933' },
    { name: 'Java', category: 'backend', icon: <FontAwesomeIcon icon={faJava} />, color: '#007396' },
    { name: 'PHP', category: 'backend', icon: <FontAwesomeIcon icon={faPhp} />, color: '#777BB4' },
    // Databases
    { name: 'MySQL', category: 'databases', icon: <FontAwesomeIcon icon={faDatabase} />, color: '#4479A1' },
    { name: 'MongoDB', category: 'databases', icon: <FontAwesomeIcon icon={faLeaf} />, color: '#47A248' },
    { name: 'SQL Server', category: 'databases', icon: <FontAwesomeIcon icon={faTable} />, color: '#CC2927' },
    { name: 'SQLite', category: 'databases', icon: <FontAwesomeIcon icon={faFile} />, color: '#003B57' },
    // Tools
    { name: 'Git', category: 'tools', icon: <FontAwesomeIcon icon={faGitAlt} />, color: '#F05032' },
    { name: 'GitHub', category: 'tools', icon: <FontAwesomeIcon icon={faGithub} />, color: '#181717' },
    { name: 'GitLab', category: 'tools', icon: <FontAwesomeIcon icon={faGitlab} />, color: '#FCA121' },
    // Others
    { name: 'MERN Stack', category: 'others', icon: <FontAwesomeIcon icon={faReact} />, color: '#61DAFB' },
    { name: 'WordPress', category: 'others', icon: <FontAwesomeIcon icon={faWordpress} />, color: '#21759B' },
    { name: 'Generative AI', category: 'others', icon: <FontAwesomeIcon icon={faRobot} />, color: '#FF6B6B' },
    { name: 'DSA', category: 'others', icon: <FontAwesomeIcon icon={faBrain} className="text-primary text-3xl" />, color: '#9C27B0' },
    { name: 'Python', category: 'others', icon: <FontAwesomeIcon icon={faPython} />, color: '#3776AB' },
  ];

  const categories: Category[] = [
    { id: 'frontend', name: 'Frontend', icon: <FontAwesomeIcon icon={faGlobe} /> },
    { id: 'backend', name: 'Backend', icon: <FontAwesomeIcon icon={faServer} /> },
    { id: 'databases', name: 'Databases', icon: <FontAwesomeIcon icon={faDatabase} /> },
    { id: 'tools', name: 'Tools', icon: <FontAwesomeIcon icon={faTools} /> },
    { id: 'others', name: 'Others', icon: <FontAwesomeIcon icon={faLayerGroup} /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        mass: 0.8,
      },
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

  const hoverEffect = {
    scale: 1.15,
    rotate: 5,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-neutral-light to-primary/10 dark:from-neutral-dark dark:to-primary-dark/20 overflow-hidden"
    >
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
          animate={inView ? 'visible' : 'hidden'}
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
              Tech Stack
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
            Technologies I leverage to build innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          ref={parallaxRef}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="glass rounded-2xl shadow-lg p-8 border border-neutral-200/20 dark:border-neutral-400/20"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                  transition: { duration: 6, repeat: Infinity },
                }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
              />
              <motion.h3
                variants={item}
                className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className="text-3xl text-primary dark:text-primary-light"
                  animate={floatingAnimation}
                >
                  {category.icon}
                </motion.span>
                {category.name}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={hoverEffect}
                      className="flex flex-col items-center justify-center p-3 rounded-lg glass shadow-md border border-neutral-200/20 dark:border-neutral-400/20 cursor-pointer"
                    >
                      <motion.div
                        animate={floatingAnimation}
                        className="text-4xl mb-2"
                        style={{ color: skill.color }}
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.8 },
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-xs sm:text-sm text-center text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
