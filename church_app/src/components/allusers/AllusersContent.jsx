import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import classes from './Allusers.module.scss'

function AllUsersContent({ caption, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.allusers__content__detail__infoholder}
    >
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.allusers__content__detail__infoholder__caption}
      >
        {caption}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.allusers__content__detail__infoholder__desc}
      >
        {detail}
      </motion.span>
    </motion.div>
  )
}

AllUsersContent.propTypes = {
  caption: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
}

export default AllUsersContent
