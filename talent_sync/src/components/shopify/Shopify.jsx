import React from 'react'
import { motion } from 'framer-motion'
import classes from './Shopify.module.scss'
import ReusableImg from '../img/ReusableImg'
import shopify from '../../images/shopify.png'
import star from '../../images/star.png'
import Text from '../text/Text'
import sara from '../../images/sara.png'
import leftarrow from '../../images/arrowLeft.png'
import rightarrow from '../../images/arrowRight.png'
import anotherimg1 from '../../images/anotherimg1.png'
import anotherimg2 from '../../images/anotherimg2.png'
import anotherimg3 from '../../images/anotherimg3.png'
import anotherimg4 from '../../images/anotherimg4.png'
import anotherimg5 from '../../images/anotherimg5.png'

function Shopify() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.shopify}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.shopify__left}
      >
        <ReusableImg
          src={shopify}
          alt="shopify"
          width={'100px'}
          height={'25px'}
        />
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.shopify__left__star}
        >
          {new Array(5).fill(null).map((_, idx) => (
            <ReusableImg
              key={idx}
              src={star}
              alt="star"
              width={'15px'}
              height={'15px'}
            />
          ))}
        </motion.span>
        <Text
          text={
            'ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.'
          }
          className={classes.shopify__left__description}
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.shopify__left__profile}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.shopify__left__profile__details}
          >
            <ReusableImg src={sara} alt="sara" width={'50px'} height={'50px'} />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.shopify__left__profile__details__position}
            >
              <Text
                text={'Sarah Thompson'}
                className={
                  classes.shopify__left__profile__details__position__name
                }
              />
              <Text
                text={'Project Manager, Shopify'}
                className={
                  classes.shopify__left__profile__details__position__level
                }
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.shopify__left__profile__arrow}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.shopify__left__profile__arrow__container}
            >
              <ReusableImg
                src={leftarrow}
                alt="leftarrow "
                width={'20px'}
                height={'20px'}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.shopify__left__profile__arrow__container}
            >
              <ReusableImg
                src={rightarrow}
                alt="rightarrow "
                width={'20px'}
                height={'20px'}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.shopify__right}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.shopify__right__top}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                marginTop: "83px"
            }}
          >
            <ReusableImg
              src={anotherimg1}
              alt="image "
              width={'130px'}
              height={'150px'}
            />
          </motion.div>

          <ReusableImg
            src={anotherimg2}
            alt="image "
            width={'140px'}
            height={'240px'}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.shopify__right__down}
        >
          <ReusableImg
            src={anotherimg3}
            alt="image "
            width={'140px'}
            height={'100px'}
          />
          <ReusableImg
            src={anotherimg4}
            alt="image "
            width={'100px'}
            height={'150px'}
          />
          <ReusableImg
            src={anotherimg5}
            alt="image "
            width={'150px'}
            height={'100px'}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Shopify
