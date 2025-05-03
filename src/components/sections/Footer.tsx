import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FontAwesomeIcon icon={faGithub} />, url: 'https://github.com/santhosh-thouda' },
    { icon: <FontAwesomeIcon icon={faLinkedin} />, url: 'https://www.linkedin.com/in/santhosh-t-3202461bb/' },
    { icon: <FontAwesomeIcon icon={faTwitter} />, url: 'https://twitter.com/yourusername' },
  ];

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

  return (
    <footer
      className="relative bg-gradient-to-br from-neutral-light to-primary/10 dark:from-neutral-dark dark:to-primary-dark/20 border-t border-neutral-200/20 dark:border-neutral-400/20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -left-40 top-10 w-80 h-80 rounded-full bg-primary/20 dark:bg-primary-dark/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        className="absolute -right-40 bottom-10 w-96 h-96 rounded-full bg-secondary/20 dark:bg-secondary-dark/30 blur-3xl"
      />

      <div className="container mx-auto px-6 py-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div
            variants={item}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <motion.span
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Santhosh
            </motion.span>
            <p className="text-neutral-400 dark:text-neutral-300 mt-2 text-base">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </motion.div>

          <motion.div variants={container} className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{
                  scale: 1.2,
                  rotate: 15,
                  background: 'var(--primary)',
                  color: '#fff',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
                className="relative p-3 glass rounded-full text-neutral-400 dark:text-neutral-300 text-xl"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                    transition: { duration: 6, repeat: Infinity },
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
                />
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-8 text-center text-neutral-400 dark:text-neutral-300 text-base"
        >
          <p>Built with React, TypeScript, TailwindCSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;