/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import * as XLSX from 'xlsx'
import axios from 'axios'
import classes from './Header.module.scss'
import logo from '../../images/main_logo.png'
import Text from '../text/Text'
import AnimatedButton from '../button/Button'
import flowerybg from '../../images/flowery.jpg'
import RegisterModal from '../register/RegisterModal'
import SigninModal from '../signin/Signin'

function Header() {
  const [menuToggle, setMenuToggle] = useState(false)
  const [createRegister, setCreateRegister] = useState(false)
  const [createSignin, setCreateSignin] = useState(false)
  const currentURL = window.location.href
  const [token, setToken] = useState(null)
  const [usersData, setUsersData] = useState([])
  const [decodedToken, setDecodedToken] = useState(null)

  useEffect(() => {
    try {
      if (token) {
        const [header, payload, signature] = token.split('.')
        const decodedPayload = JSON.parse(atob(payload))
        setDecodedToken(decodedPayload)
      }
    } catch (error) {
      console.error('Error decoding token:', error)
    }
  }, [token])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://discipleship.onrender.com/api')
        setUsersData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(usersData)
    XLSX.utils.book_append_sheet(wb, ws, 'Users Data')
    XLSX.writeFile(wb, 'users_data.xlsx')
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const handleCreateRegister = () => {
    setCreateRegister(true)
    setMenuToggle(false)
  }
  const handleCreateSignin = () => {
    setCreateSignin(true)
    setMenuToggle(false)
  }

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.header__logoHolder__name}
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.header__logoHolder__name__title1}
          >
            THE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.header__logoHolder__name__title2}
          >
            PRESBYTERIAN
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.header__logoHolder__name__title3}
          >
            CHURCH OF NIGERIA
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.header__logoHolder__name__title4}
          >
            LEKKI PARISH
          </motion.span>
        </motion.div>
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
        {currentURL.includes('onyeisi') && (
          <AnimatedButton
            text={
              decodedToken && decodedToken.isAdmin ? 'Download Users' : 'Signin'
            }
            onClick={
              decodedToken && decodedToken.isAdmin
                ? exportToExcel
                : handleCreateSignin
            }
            className={classes.header__contactUs__register__contact}
            type="button"
          />
        )}
        <AnimatedButton
          text="Contact Us"
          onClick={() => {}}
          className={classes.header__contactUs__register__contact}
          type="button"
        />
        <AnimatedButton
          text="Register"
          onClick={handleCreateRegister}
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
            {currentURL.includes('onyeisi') && (
              <AnimatedButton
                text={
                  decodedToken && decodedToken.isAdmin
                    ? 'Download Users'
                    : 'Signin'
                }
                onClick={
                  decodedToken && decodedToken.isAdmin
                    ? exportToExcel
                    : handleCreateSignin
                }
                className={
                  classes.header__mobileMenu__menucontent__container__sigin
                }
                type="button"
              />
            )}
            <AnimatedButton
              text="Contact Us"
              onClick={() => {}}
              className={
                classes.header__mobileMenu__menucontent__container__contact
              }
              type="button"
            />
            <AnimatedButton
              text="Register"
              onClick={handleCreateRegister}
              className={
                classes.header__mobileMenu__menucontent__container__signup
              }
              type="button"
            />
          </div>
        </motion.div>
      </motion.div>
      <RegisterModal
        createRegister={createRegister}
        setCreateRegister={setCreateRegister}
      />
      <SigninModal
        createSignin={createSignin}
        setCreateSignin={setCreateSignin}
      />
    </motion.div>
  )
}

export default Header
