/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import classes from './Allusers.module.scss';

function RenderPagination({
  totalResults,
  resultsPerPage,
  handleCurrentPage,
  currentPage,
}) {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.pagination}
    >
      {new Array(totalPages).fill(null).map((_, idx) => (
        <motion.div
          key={idx}
          disabled={currentPage === 1 || currentPage === totalPages}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`${classes.pagination__content} ${
            currentPage === idx + 1 && classes.pagination__currentPage
          }`}
          onClick={() => handleCurrentPage(idx + 1)}
        >
          {idx + 1}
        </motion.div>
      ))}
    </motion.div>
  );
}

RenderPagination.propTypes = {
  totalResults: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  handleCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default RenderPagination;
