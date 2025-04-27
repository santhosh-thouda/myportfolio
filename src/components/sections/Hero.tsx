import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import profile from './profile.png';
import SanthoshThouda1 from './SanthoshThouda1.pdf'; // Import the PDF from the sections folder

const Hero: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
  };

  const float = {
    y: [0, -20, 0],
    rotate: [0, 2, -2, 0],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
  };

  const techBadges = [
    { icon: '⚛️', name: 'React', size: 'w-14 h-14', orbit: 'lg:-left-16 lg:top-12', delay: 0 },
    { icon: '🟢', name: 'Node.js', size: 'w-14 h-14', orbit: 'lg:-right-16 lg:bottom-12', delay: 0.1 },
    { icon: '📘', name: 'TypeScript', size: 'w-12 h-12', orbit: 'lg:right-12 lg:top-16', delay: 0.2 },
    { icon: '🍃', name: 'MongoDB', size: 'w-12 h-12', orbit: 'lg:left-12 lg:bottom-16', delay: 0.3 },
    { icon: '☕', name: 'Java', size: 'w-12 h-12', orbit: 'lg:left-20 lg:top-4', delay: 0.4 },
    { icon: '🐍', name: 'Python', size: 'w-12 h-12', orbit: 'lg:right-20 lg:top-4', delay: 0.5 },
  ];

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/santhosh-thouda' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/santhosh-t-3202461bb/' },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-light to-primary/10 dark:from-neutral-dark dark:to-primary-dark/20"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-primary/20 dark:bg-primary-dark/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-secondary/20 dark:bg-secondary-dark/30 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <motion.div variants={container} className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              variants={item}
              className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Hi, I'm{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
                style={{ backgroundSize: '200% 200%' }}
              >
                Santhosh
              </motion.span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-3xl lg:text-4xl font-semibold mb-8 text-neutral-400 dark:text-neutral-300"
            >
              Crafting the Future of Web
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg mb-10 text-neutral-400 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              A passionate Full Stack Developer specializing in MERN stack, building scalable, user-centric applications with clean code and innovative solutions.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg animate-pulse-glow"
              >
                Let's Connect
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, borderColor: '#4F46E5' }}
                whileTap={{ scale: 0.95 }}
                href={SanthoshThouda1}
                download="SanthoshThouda1.pdf"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all"
              >
                <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
                Get My CV
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="flex justify-center lg:justify-start space-x-6 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#4F46E5' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-neutral-400 hover:text-primary text-3xl"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with Orbiting Tech Badges */}
          <motion.div variants={item} className="lg:w-1/2 flex justify-center relative min-h-[400px]">
            <motion.div animate={float} className="relative w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-30"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-full overflow-hidden border-8 border-white dark:border-neutral-dark shadow-2xl"
              >
                <img src={profile} alt="Santhosh Thouda" className="w-full h-full object-cover" />
                <motion.div
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center p-6"
                >
                  <span className="text-white font-semibold text-lg">Full Stack Developer</span>
                </motion.div>
              </motion.div>

              {techBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    inView
                      ? {
                          scale: 1,
                          opacity: 1,
                          x: [0, 60, 120, 60, 0, -60, -120, -60, 0],
                          y: [0, -60, 0, 60, 0, -60, 0, 60, 0],
                          transition: {
                            duration: 10 + index * 1, // Reduced duration for smoother orbit
                            repeat: Infinity,
                            ease: 'linear',
                            delay: badge.delay,
                          },
                        }
                      : { scale: 0, opacity: 0 }
                  }
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  className={`absolute ${badge.size} ${badge.orbit} glass rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-primary/30 z-20`}
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">{badge.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-neutral-400 hover:text-primary transition-colors"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm font-medium mb-2"
          >
            Scroll Down
          </motion.span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;