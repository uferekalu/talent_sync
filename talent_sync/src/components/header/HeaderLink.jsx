import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Text from '../text/Text'
import ReusableImg from '../img/ReusableImg'

function HeaderLink({
  divClassName,
  textClassName,
  imgClassName,
  text,
  imgSrc,
  alt,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={divClassName}
    >
      <Text text={text} className={textClassName} />
      <ReusableImg
        src={imgSrc}
        alt={alt}
        width={'14px'}
        height={'14px'}
        className={imgClassName}
      />
    </motion.div>
  )
}

HeaderLink.propTypes = {
  divClassName: PropTypes.string.isRequired,
  textClassName: PropTypes.string.isRequired,
  imgClassName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default HeaderLink
