import React from 'react'
import { motion } from 'framer-motion'
import classes from './Header.module.scss'

function Header() {
  return (
    <motion.div className={classes.header}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__logo__container}
      >
        Header
      </motion.div>
    </motion.div>
  )
}

export default Header
