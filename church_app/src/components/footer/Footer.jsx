import React from 'react'
import { motion } from 'framer-motion'
import classes from './Footer.module.scss'
import logo from '../../images/main_logo.png'
import Text from '../text/Text'

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.footer}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.footer__contact}
      >
        <motion.img
          src={logo}
          alt="logo"
          className={classes.footer__contact__logo}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <Text
          text="© Copyright 2024"
          className={classes.footer__contact__copyright}
        />
        <Text text="+2347032936214" className={classes.footer__contact__tel} />
        <Text
          text="uferepeace@gmail.com"
          className={classes.footer__contact__email}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.footer__links}
      >
        <span className={classes.footer__links__quicklinks}>Quicklinks</span>
        <span className={classes.footer__links__home}>Home</span>
        <span className={classes.footer__links__about}>About Us</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.footer__connect}
      >
        <span className={classes.footer__connect__title}>Connect</span>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.footer__connect__socials}
        >
          <motion.i
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '17px',
              marginTop: '-10px',
            }}
            className="bi bi-facebook"
          />
          <motion.i
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '17px',
              marginTop: '-10px',
            }}
            className="bi bi-twitter-x"
          />
          <motion.i
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '17px',
              marginTop: '-10px',
            }}
            className="bi bi-linkedin"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
