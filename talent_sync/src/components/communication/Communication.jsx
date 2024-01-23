import React from 'react'
import { motion } from 'framer-motion'
import classes from './Communication.module.scss'
import { commData } from '../../utils/faq'
import ReusableImg from '../img/ReusableImg'
import tick from '../../images/checkCircle.png'
import Text from '../text/Text'
import AnimatedButton from '../button/AnimatedButton'
import screenMockup from '../../images/screenMockup.png'

function Communication() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.communication}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.communication__left}
      >
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.communication__left__caption}
        >
          Ready to clear the path to perfect communication?
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.communication__left__content}
        >
          {commData.map((data, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.communication__left__content__detail}
            >
              <ReusableImg
                src={tick}
                alt="tick"
                width={'13px'}
                height={'13px'}
              />
              <Text
                text={data}
                className={classes.communication__left__content__detail__text}
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.communication__left__content__action}
          >
            <AnimatedButton
              type="button"
              onClick={() => {}}
              text={'Talk to sales'}
              className={
                classes.communication__left__content__action__talktosales
              }
            />
            <AnimatedButton
              type="button"
              onClick={() => {}}
              text={'Start your free trial'}
              className={
                classes.communication__left__content__action__freetrial
              }
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.communication__right}
      >
        <ReusableImg
          src={screenMockup}
          alt="screen mockup"
          className={classes.communication__right__img__mobile}
        />
        <ReusableImg
          src={screenMockup}
          alt="screen mockup"
          className={classes.communication__right__img__desktop}
        />
      </motion.div>
    </motion.div>
  )
}

export default Communication
