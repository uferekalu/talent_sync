import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import classes from './ChooseClearLink.module.scss'
import ReusableImg from '../img/ReusableImg'
import Text from '../text/Text'

function ChooseClearContent({ src, alt, text, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.clear__content}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.clear__content__img}
      >
        <ReusableImg
          src={src}
          alt={alt}
          width={'20px'}
          height={'20px'}
        />
      </motion.div>
      <Text text={text} className={classes.clear__content__caption} />
      <Text text={desc} className={classes.clear__content__desc} />
    </motion.div>
  )
}

ChooseClearContent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default ChooseClearContent
