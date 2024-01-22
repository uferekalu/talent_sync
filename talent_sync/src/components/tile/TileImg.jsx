import React from 'react'
import { motion } from 'framer-motion'
import ReusableImg from '../img/ReusableImg'
import PropTypes from 'prop-types'

function TileImg({ className, imgSrc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <ReusableImg src={imgSrc} alt="star" />
    </motion.div>
  )
}

TileImg.propTypes = {
  className: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default TileImg
