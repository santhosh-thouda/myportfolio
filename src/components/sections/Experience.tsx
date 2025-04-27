import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  logo: string;
};

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false, // Allow re-animation on scroll
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.5,
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

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Subject Matter Expert (CSE)',
      company: 'Chegg Experts',
      period: 'Feb 2024 - Present',
      description: [
        'Deliver accurate and high-quality solutions for diverse Computer Science and Engineering problems.',
        'Provide clear, detailed, and step-by-step explanations to enhance student understanding.',
        'Achieve high ratings through reliability, precision, and effective deadline management.',
        'Utilize tools and languages like Java and Python based on client requirements.',
      ],
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseYQKAQdKw3LEtcWxj2utl7RquhVIlKrBJw&s',
    },
  ];

  return (
    <section
      id="experience"
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
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Work{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Experience
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
            A summary of my professional experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={item}
              whileHover={cardHover}
              animate={floatingAnimation}
              className="relative flex flex-col md:flex-row gap-8 p-6 glass rounded-xl shadow-lg border border-neutral-200/20 dark:border-neutral-400/20 hover:border-primary transition-all"
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
              <div className="md:w-1/4 flex flex-col items-center">
                <motion.div
                  className="w-20 h-20 rounded-full glass p-2 shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain" />
                </motion.div>
                <div className="mt-4 text-center">
                  <p className="text-neutral-400 dark:text-neutral-300 text-sm">{exp.period}</p>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-primary dark:text-primary mb-4">{exp.company}</h4>
                <ul className="space-y-2 text-neutral-400 dark:text-neutral-300 text-sm">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary dark:text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;