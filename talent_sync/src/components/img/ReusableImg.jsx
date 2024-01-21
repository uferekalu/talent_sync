import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ReusableImg = ({ src, alt, width, height, className }) => {
  const imageStyle = {
    width: width || '100%',
    height: height || 'auto',
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      style={imageStyle}
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    />
  );
};

ReusableImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

export default ReusableImg;
