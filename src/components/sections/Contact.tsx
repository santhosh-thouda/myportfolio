import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [submitted, setSubmitted] = React.useState(false);

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

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        alert('EmailJS configuration is missing. Please check environment variables.');
        setSubmitting(false);
        return;
      }

      emailjs
        .send(serviceId, templateId, values, userId)
        .then(() => {
          setSubmitted(true);
          resetForm();
          setTimeout(() => setSubmitted(false), 5000);
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please try again.');
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <section
      id="contact"
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
            Get In{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              Touch
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
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Half: Contact Info Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:w-1/2 space-y-6"
          >
            {[
              { icon: <FontAwesomeIcon icon={faEnvelope} />, title: 'Email', value: 'santhoshthouda7576@gmail.com' },
              { icon: <FontAwesomeIcon icon={faPhone} />, title: 'Phone', value: '+91-8501807576' },
              { icon: <FontAwesomeIcon icon={faMapMarkerAlt} />, title: 'Location', value: 'Hyderabad, India (502306)' },
            ].map((info, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={cardHover}
                animate={floatingAnimation}
                className="relative flex items-center gap-4 p-6 glass rounded-xl shadow-lg border border-neutral-200/20 dark:border-neutral-400/20 hover:border-primary transition-all"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                    transition: { duration: 6, repeat: Infinity },
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
                />
                <motion.div
                  className="p-3 glass rounded-full text-primary dark:text-primary"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                  <p className="text-neutral-400 dark:text-neutral-300">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Half: Form or Success Message */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:w-1/2"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  variants={item}
                  whileHover={cardHover}
                  animate={floatingAnimation}
                  className="relative p-8 glass rounded-xl shadow-lg border border-neutral-200/20 dark:border-neutral-400/20 text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                      transition: { duration: 6, repeat: Infinity },
                    }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
                  />
                  <motion.div
                    variants={item}
                    className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 text-primary dark:text-primary" />
                  </motion.div>
                  <motion.h3
                    variants={item}
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    variants={item}
                    className="text-neutral-400 dark:text-neutral-300"
                  >
                    Thank you for reaching out. I'll get back to you soon.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={formik.handleSubmit}
                  variants={item}
                  whileHover={cardHover}
                  animate={floatingAnimation}
                  className="relative p-8 glass rounded-xl shadow-lg border border-neutral-200/20 dark:border-neutral-400/20 space-y-6"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                      transition: { duration: 6, repeat: Infinity },
                    }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-20 -z-10"
                  />
                  <motion.div variants={item}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      className={`w-full px-4 py-3 rounded-lg border border-neutral-200/20 dark:border-neutral-400/20 glass text-gray-900 dark:text-white focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary transition-all ${
                        formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <motion.p
                        variants={item}
                        className="mt-1 text-sm text-red-600"
                      >
                        {formik.errors.name}
                      </motion.p>
                    ) : null}
                  </motion.div>
                  <motion.div variants={item}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={`w-full px-4 py-3 rounded-lg border border-neutral-200/20 dark:border-neutral-400/20 glass text-gray-900 dark:text-white focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary transition-all ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <motion.p
                        variants={item}
                        className="mt-1 text-sm text-red-600"
                      >
                        {formik.errors.email}
                      </motion.p>
                    ) : null}
                  </motion.div>
                  <motion.div variants={item}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      className={`w-full px-4 py-3 rounded-lg border border-neutral-200/20 dark:border-neutral-400/20 glass text-gray-900 dark:text-white focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary transition-all ${
                        formik.touched.message && formik.errors.message ? 'border-red-500' : ''
                      }`}
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <motion.p
                        variants={item}
                        className="mt-1 text-sm text-red-600"
                      >
                        {formik.errors.message}
                      </motion.p>
                    ) : null}
                  </motion.div>
                  <motion.button
                    variants={item}
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      background: 'var(--primary)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formik.isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg transition-all disabled:opacity-70"
                  >
                    {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;