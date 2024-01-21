import React, { useState } from 'react'
import { motion } from 'framer-motion'
import classes from './Header.module.scss'
import ReusableImg from '../img/ReusableImg'
import logo from '../../images/logo.png'
import Text from '../text/Text'
import chevronDown from '../../images/chevronDown.png'
import flowerybg from '../../images/flowerybg.jpg'
import AnimatedButton from '../button/AnimatedButton'
import HeaderLink from './HeaderLink'

function Header() {
  const [menuToggle, setMenuToggle] = useState(false)

  const handleMenuToggle = () => {
    setMenuToggle((prevState) => !prevState)
  }
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
        <HeaderLink
          divClassName={classes.header__links__desktop__content}
          textClassName={classes.header__links__desktop__content__text}
          imgClassName={classes.header__links__desktop__content__img}
          text={'Products'}
          imgSrc={chevronDown}
          alt={'chevronDown'}
        />
        <HeaderLink
          divClassName={classes.header__links__desktop__content}
          textClassName={classes.header__links__desktop__content__text}
          imgClassName={classes.header__links__desktop__content__img}
          text={'Solutions'}
          imgSrc={chevronDown}
          alt={'chevronDown'}
        />
        <HeaderLink
          divClassName={classes.header__links__desktop__content}
          textClassName={classes.header__links__desktop__content__text}
          imgClassName={classes.header__links__desktop__content__img}
          text={'Resources'}
          imgSrc={chevronDown}
          alt={'chevronDown'}
        />
        <HeaderLink
          divClassName={classes.header__links__desktop__content}
          textClassName={classes.header__links__desktop__content__text}
          imgClassName={classes.header__links__desktop__content__img}
          text={'Pricing'}
          imgSrc={chevronDown}
          alt={'chevronDown'}
        />
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
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__mobile}
      >
        {!menuToggle && (
          <motion.i
            onClick={handleMenuToggle}
            transition={{ duration: 0.5 }}
            style={{
              color: 'black',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '28px',
              marginTop: '-5px',
            }}
            className="bi bi-list"
          />
        )}
        {menuToggle && (
          <motion.i
            onClick={handleMenuToggle}
            transition={{ duration: 0.5 }}
            style={{
              color: 'black',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '28px',
              marginTop: '-5px',
            }}
            className="bi bi-x-square-fill"
          />
        )}
        <motion.div
          style={{ backgroundImage: `url(${flowerybg})` }}
          key={menuToggle}
          initial={{
            opacity: 0,
            scale: 0.2,
            y: '-50%',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          }} // Start from the middle
          animate={{
            opacity: 1,
            scale: 1,
            y: '0%',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)',
          }} // Grow to cover the screen
          exit={{ opacity: 0, scale: 0.5, y: '-50%' }}
          transition={{ duration: 1.0 }}
          className={`${
            menuToggle
              ? classes.header__mobile__menucontent
              : classes.header__mobile__nomenucontent
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.header__mobile__menucontent__container}
          >
            <HeaderLink
              divClassName={classes.header__links__desktop__content}
              textClassName={classes.header__links__desktop__content__text}
              imgClassName={classes.header__links__desktop__content__img}
              text={'Products'}
              imgSrc={chevronDown}
              alt={'chevronDown'}
            />
            <HeaderLink
              divClassName={classes.header__links__desktop__content}
              textClassName={classes.header__links__desktop__content__text}
              imgClassName={classes.header__links__desktop__content__img}
              text={'Solutions'}
              imgSrc={chevronDown}
              alt={'chevronDown'}
            />
            <HeaderLink
              divClassName={classes.header__links__desktop__content}
              textClassName={classes.header__links__desktop__content__text}
              imgClassName={classes.header__links__desktop__content__img}
              text={'Resources'}
              imgSrc={chevronDown}
              alt={'chevronDown'}
            />
            <HeaderLink
              divClassName={classes.header__links__desktop__content}
              textClassName={classes.header__links__desktop__content__text}
              imgClassName={classes.header__links__desktop__content__img}
              text={'Pricing'}
              imgSrc={chevronDown}
              alt={'chevronDown'}
            />
            <AnimatedButton
              text="Talk to sales"
              type="button"
              onClick={() => {}}
              className={classes.header__actions__talktosales__mobile}
            />
            <AnimatedButton
              text="Signup for free"
              type="button"
              onClick={() => {}}
              className={classes.header__actions__signup__mobile}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Header
