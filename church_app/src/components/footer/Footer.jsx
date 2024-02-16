/* eslint-disable no-undef */
import React from 'react'

import { motion } from 'framer-motion'
import classes from './Footer.module.scss'
import Text from '../text/Text'
import HeaderLogo from '../header/HeaderLogo'

function Footer() {
  const handleSocialLink = (link) => {
    window.open(link, '_blank')
  }
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
        className={classes.footer__logoHolder}
      >
        <HeaderLogo />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.footer__links}
      >
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
            onClick={() =>
              handleSocialLink(
                'https://web.facebook.com/pcnlekkiparish/?_rdc=1&_rdr',
              )
            }
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
            className="bi bi-youtube"
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
            className="bi bi-instagram"
          />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.footer__contact}
      >
        <Text
          text="© Copyright 2024"
          className={classes.footer__contact__copyright}
        />
      </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
