import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import classes from './Base.module.scss'

function BaseContent({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.basefooter__content}
    >
      {data.map((data, idx) => (
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.basefooter__content__item}
        >
          {data}
        </motion.span>
      ))}
    </motion.div>
  )
}

BaseContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BaseContent
