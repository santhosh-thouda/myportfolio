import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const educationItems = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      percentage: '76%',
      period: '2023 - Present',
      location: 'Punjab, India',
    },
    {
      institution: 'Lovely Professional University',
      degree: 'Diploma – Computer Science and Engineering',
      percentage: '88%',
      period: '2020 - 2023',
      location: 'Punjab, India',
    },
    {
      institution: 'Sree Sathya Sai High School',
      degree: 'SSC',
      percentage: '95.5%',
      period: '2019 - 2020',
      location: 'Sadasivpet, Telangana',
    },
  ];

  return (
    <section
      id="education"
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
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Education
            </motion.span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-400 dark:text-neutral-300 max-w-3xl mx-auto"
          >
            A journey through my academic milestones and qualifications
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
              className="relative glass p-6 rounded-xl shadow-lg border border-neutral-200/20 dark:border-neutral-400/20 hover:border-primary transition-all"
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                  transition: { duration: 6, repeat: Infinity },
                }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
              />
              {/* Floating animation for card */}
              <motion.div animate={floatingAnimation}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{item.institution}</h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{item.degree}</p>
                {item.percentage && (
                  <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-semibold mb-3">
                    Percentage: {item.percentage}
                  </p>
                )}
                <div className="flex items-center text-neutral-400 dark:text-neutral-300 mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-primary dark:text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-base">{item.period}</span>
                </div>
                <div className="flex items-center text-neutral-400 dark:text-neutral-300">
                  <svg
                    className="w-5 h-5 mr-2 text-primary dark:text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-base">{item.location}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
