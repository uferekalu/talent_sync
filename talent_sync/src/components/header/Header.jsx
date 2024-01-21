import React from 'react'
import { motion } from 'framer-motion'
import classes from './Header.module.scss'
import ReusableImg from '../img/ReusableImg'
import logo from '../../images/logo.png'
import Text from '../text/Text'
import chevronDown from '../../images/chevronDown.png'
import AnimatedButton from '../button/AnimatedButton'

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.header}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__logo}
      >
        <ReusableImg src={logo} alt="logo" width={'20px'} height={'25px'} />
        <Text text={'ClearLink'} className={classes.header__logo__text} />
        <Text text={'.'} className={classes.header__logo__dot} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__links__desktop}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__links__desktop__content}
        >
          <Text
            text={'Products'}
            className={classes.header__links__desktop__content__text}
          />
          <ReusableImg
            src={chevronDown}
            alt="chevronDown"
            width={'14px'}
            height={'14px'}
            className={classes.header__links__desktop__content__img}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__links__desktop__content}
        >
          <Text
            text={'Solutions'}
            className={classes.header__links__desktop__content__text}
          />
          <ReusableImg
            src={chevronDown}
            alt="chevronDown"
            width={'14px'}
            height={'14px'}
            className={classes.header__links__desktop__content__img}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__links__desktop__content}
        >
          <Text
            text={'Resources'}
            className={classes.header__links__desktop__content__text}
          />
          <ReusableImg
            src={chevronDown}
            alt="chevronDown"
            width={'14px'}
            height={'14px'}
            className={classes.header__links__desktop__content__img}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__links__desktop__content}
        >
          <Text
            text={'Pricing'}
            className={classes.header__links__desktop__content__text}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__actions}
      >
        <AnimatedButton
          text="Talk to sales"
          type="button"
          onClick={() => {}}
          className={classes.header__actions__talktosales}
        />
        <AnimatedButton
          text="Signup for free"
          type="button"
          onClick={() => {}}
          className={classes.header__actions__signup}
        />
      </motion.div>
    </motion.div>
  )
}

export default Header
