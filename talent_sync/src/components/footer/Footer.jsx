import React from 'react'
import { motion } from 'framer-motion'
import classes from './Footer.module.scss'
import Text from '../text/Text'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import github from '../../images/github.png'
import youtube from '../../images/youtube.png'

const imgData = [linkedin, twitter, facebook, instagram, github, youtube]

function Footer() {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.footer}
    >
      <Text
        text={'© 2023 ClearLink. All rights reserved.'}
        className={classes.footer__copyright}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.footer__socials}
      >
        {imgData.map((data, idx) => (
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={idx}
            src={data}
            alt={'Social'}
            variants={variants}
            className={classes.footer__socials__logo}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Footer
