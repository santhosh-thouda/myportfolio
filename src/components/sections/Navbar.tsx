import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useScroll } from '../../context/ScrollContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faLaptopCode, faCertificate, faBriefcase, faEnvelope, faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme() || { theme: 'light', toggleTheme: () => {} };
  const { activeSection } = useScroll() || { activeSection: 'home' };
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FontAwesomeIcon icon={faHome} /> },
    { id: 'about', label: 'About', icon: <FontAwesomeIcon icon={faUser} /> },
    // { id: 'projects', label: 'Projects', icon: <FontAwesomeIcon icon={faCode} /> },
    { id: 'skills', label: 'Skills', icon: <FontAwesomeIcon icon={faLaptopCode} /> },
    // { id: 'certificates',  label: 'Certificates', icon: <FontAwesomeIcon icon={faCertificate} /> },
    // { id: 'experience', label: 'Experience', icon: <FontAwesomeIcon icon={faBriefcase} /> },
    { id: 'contact', label: 'Contact', icon: <FontAwesomeIcon icon={faEnvelope} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      scaleY: 1,
      transition: { type: 'spring', stiffness: 120, damping: 15, duration: 0.3 },
    },
    exit: { opacity: 0, height: 0, scaleY: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div variants={navItemVariants} className="flex items-center">
            <motion.span
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Santhosh
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-6"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                variants={navItemVariants}
                whileHover={{ scale: 1.05, color: '#fff', background: 'linear-gradient(45deg, #4F46E5, #EC4899)' }}
                className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-primary to-secondary'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              variants={navItemVariants}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-gradient-to-r from-primary to-secondary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div variants={navItemVariants} className="md:hidden flex items-center">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-gradient-to-r from-primary to-secondary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden glass border-t border-primary/20"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  variants={navItemVariants}
                  whileHover={{ scale: 1.02, background: 'linear-gradient(45deg, #4F46E5, #EC4899)', color: '#fff' }}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-primary to-secondary'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleTheme}
                variants={navItemVariants}
                whileHover={{ scale: 1.02, background: 'linear-gradient(45deg, #4F46E5, #EC4899)', color: '#fff' }}
                className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-white"
              >
                <span className="mr-3">{theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</span>
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;