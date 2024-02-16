import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../images/main_logo.png'
import line from '../../images/line.png'
import classes from './Header.module.scss'

function HeaderLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.header__logoHolder}
    >
      <motion.img
        src={logo}
        alt="logo"
        className={classes.header__logoHolder__logo}
      />
      <motion.img
        style={{
          width: '2px',
        }}
        src={line}
        alt="logo"
        className={classes.header__logoHolder__line}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__logoHolder__name}
      >
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__logoHolder__name__title1}
        >
          THE
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__logoHolder__name__title2}
        >
          PRESBYTERIAN
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__logoHolder__name__title3}
        >
          CHURCH OF NIGERIA
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__logoHolder__name__title4}
        >
          LEKKI PARISH
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default HeaderLogo
