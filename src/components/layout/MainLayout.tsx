import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title || 'My Portfolio'}</title>
        <meta name="description" content={description || 'Personal portfolio website'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-light dark:bg-dark transition-colors duration-300 ease-in-out">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
