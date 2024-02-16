/* eslint-disable react/require-default-props */
import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function Text({ text, className, onClick }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      onClick={onClick}
    >
      {text}
    </motion.span>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Text