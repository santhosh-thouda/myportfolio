import React from 'react';
// import motion from "framer-motion";
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const NotFound: React.FC = () => {
  return (
    <MainLayout title="404 Not Found">
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <h1 className="text-9xl font-bold text-primary dark:text-secondary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium inline-block hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 transition-colors"
          >
            Go to Homepage
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default NotFound;