import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import floating from './floating.jpg';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
  };

  const float = {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  };

  const techOrbits = [
    { icon: '⚛️', name: 'React', size: 'w-14 h-14', orbit: 'lg:-left-16 lg:top-12', delay: 0 },
    { icon: '☕', name: 'Java', size: 'w-12 h-12', orbit: 'lg:left-1/4 lg:top-4', delay: 0.4 },
    { icon: '🐍', name: 'Python', size: 'w-12 h-12', orbit: 'lg:right-1/4 lg:top-4', delay: 0.8 },
    { icon: '🗃️', name: 'DB', size: 'w-12 h-12', orbit: 'lg:-right-16 lg:top-12', delay: 1.2 },
    { icon: '🤖', name: 'AI', size: 'w-14 h-14', orbit: 'lg:left-10 lg:bottom-16', delay: 1.6 },
    { icon: '🚀', name: 'MERN', size: 'w-12 h-12', orbit: 'lg:right-10 lg:bottom-16', delay: 2.0 },
  ];

  return (
    <section
      id="about"
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
          animate={inView ? 'visible' : 'hidden'}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            About{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div
            variants={item}
            className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
          />
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-neutral-400 dark:text-neutral-300 max-w-3xl mx-auto"
          >
            Passionate about creating innovative digital experiences with precision and creativity.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Animated Developer Image */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={item}
            className="lg:w-1/2 relative min-h-[400px] flex items-center justify-center"
          >
            <motion.div animate={float} className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary blur-xl opacity-30"
              />
              <img
                src={floating}
                alt="Santhosh Thouda"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white dark:border-neutral-dark"
              />
            </motion.div>

            {techOrbits.map((tech, index) => (
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
                          duration: 15 + index * 2,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: tech.delay,
                        },
                      }
                    : { scale: 0, opacity: 0 }
                }
                whileHover={{ scale: 1.3, rotate: 360 }}
                className={`absolute ${tech.size} ${tech.orbit} glass rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-primary/30 z-20`}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Showcase */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={container}
            className="lg:w-1/2 w-full space-y-8"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
              className="p-6 glass rounded-2xl shadow-lg border-l-8 border-primary"
            >
              <motion.div animate={float}>
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/20 mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chegg Expert</h3>
                    <p className="text-neutral-400 dark:text-neutral-300 mt-1">Solving complex CS problems with a 1.2x rating</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🖥️', title: 'Full Stack', desc: 'MERN | Java | PHP' },
                { icon: '🧠', title: 'AI Explorer', desc: 'Generative AI' },
                { icon: '🔍', title: 'Problem Solver', desc: 'DSA | Algorithms' },
                { icon: '🚀', title: 'Fast Learner', desc: 'New Technologies' },
              ].map((skill, index) => (
                skill.title === 'Problem Solver' ? (
                  <a
                    key={index}
                    href="https://codolio.com/profile/santhu" // Replace with your actual Codolio profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      variants={item}
                      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                      className="p-4 glass rounded-lg shadow-md border border-primary/20 cursor-pointer"
                    >
                      <motion.div animate={float}>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl">{skill.icon}</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{skill.title}</h4>
                            <p className="text-sm text-neutral-400 dark:text-neutral-300">{skill.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </a>
                ) : (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                    className="p-4 glass rounded-lg shadow-md border border-primary/20"
                  >
                    <motion.div animate={float}>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">{skill.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{skill.title}</h4>
                          <p className="text-sm text-neutral-400 dark:text-neutral-300">{skill.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </div>

            <motion.a
              variants={item}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg animate-pulse-glow"
            >
              Let's Collaborate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;