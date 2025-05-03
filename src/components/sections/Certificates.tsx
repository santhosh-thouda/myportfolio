import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faRobot, faTimes, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import gfg1 from './gfg1.jpg';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  duration: string;
  icon: React.ReactNode;
  link?: string;
  logo: string;
  certificateImage: string;
}

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Animation variants
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  const certificates: Certificate[] = [
    {
      id: 1,
      name: 'HTML, CSS, JavaScript for Web Developers',
      issuer: 'Johns Hopkins University - Coursera',
      duration: '40 hours',
      icon: <FontAwesomeIcon icon={faHtml5} className="text-primary text-3xl" />,
      link: 'https://www.coursera.org/account/accomplishments/certificate/U3QTXEEUV7WU',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6rdueeJ5UB6Xu-kvoyc69uKpMJAcbRadsw&s',
      certificateImage: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~U3QTXEEUV7WU/CERTIFICATE_LANDING_PAGE~U3QTXEEUV7WU.jpeg',
    },
    {
      id: 2,
      name: 'Server-side JavaScript with Node.js',
      issuer: 'NIIT - Coursera',
      duration: '40 hours',
      icon: <FontAwesomeIcon icon={faNodeJs} className="text-primary text-3xl" />,
      link: 'https://www.coursera.org/account/accomplishments/certificate/KASR86EAPJDA',
      logo: 'https://www.vhv.rs/dpng/d/442-4427180_share-with-your-friends-niit-logo-in-png.png',
      certificateImage: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KASR86EAPJDA/CERTIFICATE_LANDING_PAGE~KASR86EAPJDA.jpeg',
    },
    {
      id: 3,
      name: 'DSA Self-Paced Course',
      issuer: 'GeeksforGeeks',
      duration: '8 weeks',
      icon: <FontAwesomeIcon icon={faBrain} className="text-primary text-3xl" />,
      link: 'https://media.geeksforgeeks.org/courses/certificates/04a10bd3369202ed88f7c1dc9195df5c.pdf',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GeeksForGeeks_logo.png',
      certificateImage: gfg1,
    },
    {
      id: 4,
      name: 'Generative AI for Everyone',
      issuer: 'DeepLearning.AI - Coursera',
      duration: '5 hours',
      icon: <FontAwesomeIcon icon={faRobot} className="text-primary text-3xl" />,
      link: 'https://www.coursera.org/account/accomplishments/certificate/QAWGCXWU26ER',
      logo: 'https://yt3.googleusercontent.com/ytc/AIdro_nS1r8vYA9YVt1AQB355iMbBJNMg0OJn0I4J53_4T9xAes=s900-c-k-c0x00ffffff-no-rj',
      certificateImage: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QAWGCXWU26ER/CERTIFICATE_LANDING_PAGE~QAWGCXWU26ER.jpeg',
    },
  ];

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-neutral-light to-primary/10 dark:from-neutral-dark dark:to-primary-dark/20 overflow-hidden"
    >
      {/* Background animation elements */}
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
              Certificates
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
            Certifications showcasing my expertise in web development, algorithms, and AI
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              whileHover={cardHover}
              animate={floatingAnimation}
              onClick={() => setSelectedCertificate(cert)}
              className="relative glass rounded-xl shadow-lg border border-neutral-200/20 dark:border-neutral-400/20 hover:border-primary transition-all p-8 cursor-pointer flex flex-col"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                  transition: { duration: 6, repeat: Infinity },
                }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
              />
              
              <div className="flex justify-center mb-6">
                <motion.img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-16 h-16 rounded-full object-contain bg-white/50 dark:bg-gray-700/50 p-2 shadow-sm"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    {cert.icon}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                </div>
                <p className="text-neutral-400 dark:text-neutral-300 text-sm">Issuer: {cert.issuer}</p>
                <p className="text-neutral-400 dark:text-neutral-300 text-sm">Duration: {cert.duration}</p>
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{
                      scale: 1.05,
                      background: 'var(--primary)',
                      color: '#fff',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '0.375rem',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                    }}
                    className="inline-flex items-center text-sm text-primary dark:text-primary"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2 w-4 h-4" />
                    View Certificate
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="relative glass rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                onClick={() => setSelectedCertificate(null)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </motion.button>
              <motion.img
                src={selectedCertificate.certificateImage}
                alt={selectedCertificate.name}
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4 } }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedCertificate.name}</h3>
                <p className="text-neutral-400 dark:text-neutral-300 text-sm">Issuer: {selectedCertificate.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;