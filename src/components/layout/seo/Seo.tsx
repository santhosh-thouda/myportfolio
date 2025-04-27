import React from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
};

const Seo: React.FC<SeoProps> = ({
  title = 'Santhosh Thouda - Portfolio',
  description = 'Portfolio of Santhosh Thouda, a Full Stack Developer specializing in MERN stack, Java, and web technologies.',
  keywords = ['Santhosh Thouda', 'Full Stack Developer', 'MERN', 'React', 'Java', 'portfolio'],
  author = 'Santhosh Thouda',
  url = 'https://santhosh-thouda.github.io',
  image = '/preview.jpg'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;