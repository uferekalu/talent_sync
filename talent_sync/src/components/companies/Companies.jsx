import React from 'react'
import { motion } from 'framer-motion'
import classes from './Companies.module.scss'
import shopify from '../../images/shopify.png'
import coinbase from '../../images/coinbase.png'
import dropbox from '../../images/dropbox.png'
import intercom from '../../images/intercom.png'
import marvel from '../../images/marvel.png'
import automatic from '../../images/automatic.png'
import ReusableImg from '../img/ReusableImg'

const imgData = [shopify, coinbase, dropbox, intercom, marvel, automatic]

function Companies() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.companies}
    >
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.companies__text}
      >
        Join 1,500+ companies already video conferencing the ClearLink way
      </motion.span>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.companies__container}
      >
        {imgData.map((data, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.companies__container__logo}
          >
            <ReusableImg
              src={data}
              alt="star"
              // width={'20px'}
              // height={'20px'}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Companies
