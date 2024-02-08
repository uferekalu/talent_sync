import React, { useState } from 'react'
import { motion } from 'framer-motion'
import classes from './Header.module.scss'
import logo from '../../images/main_logo.png'
import Text from '../text/Text'
import AnimatedButton from '../button/Button'
import flowerybg from '../../images/flowery.jpg'

function Header() {
  const [menuToggle, setMenuToggle] = useState(false)
  const handleMenuToggle = () => {
    setMenuToggle((prevvState) => !prevvState)
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
        className={classes.header__logoHolder}
      >
        <motion.img
          src={logo}
          alt="logo"
          className={classes.header__logoHolder__logo}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__linksHolder}
      >
        <Text text="Home" className={classes.header__linksHolder__homeLink} />
        <Text
          text="About Us"
          className={classes.header__linksHolder__aboutUs}
        />
        {/* <Text text="Blog" className={classes.header__linksHolder__blog} /> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__contactUs__register}
      >
        <AnimatedButton
          text="Contact Us"
          onClick={() => {}}
          className={classes.header__contactUs__register__contact}
          type="button"
        />
        <AnimatedButton
          text="Register"
          onClick={() => {}}
          className={classes.header__contactUs__register__signup}
          type="button"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__mobileMenu}
      >
        {!menuToggle && (
          <motion.i
            onClick={handleMenuToggle}
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '30px',
              marginTop: '-10px',
            }}
            className="bi bi-list"
          />
        )}
        {menuToggle && (
          <motion.i
            onClick={handleMenuToggle}
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '30px',
              marginTop: '-10px',
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
              ? classes.header__mobileMenu__menucontent
              : classes.header__mobileMenu__nomenucontent
          }`}
        >
          <div className={classes.header__mobileMenu__menucontent__container}>
            <Text
              text="Home"
              className={
                classes.header__mobileMenu__menucontent__container__homelink
              }
            />
            <Text
              text="About Us"
              className={
                classes.header__mobileMenu__menucontent__container__aboutlink
              }
            />
            {/* <Text
              text="Blog"
              className={
                classes.header__mobileMenu__menucontent__container__bloglink
              }
            /> */}
            <AnimatedButton
              text="Contact Us"
              onClick={() => {}}
              className={classes.header__mobileMenu__menucontent__container__contact}
              type="button"
            />
            <AnimatedButton
              text="Register"
              onClick={() => {}}
              className={classes.header__mobileMenu__menucontent__container__signup}
              type="button"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Header
