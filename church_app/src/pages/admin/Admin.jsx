/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Church from '../../components/church'
import defaultImg from '../../images/main_logo.png'
import classes from './Admin.module.scss'
import RegisterModal from '../../components/register/RegisterModal'
import Allusers from '../../components/allusers/Allusers'

function Admin() {
  const [createRegister, setCreateRegister] = useState(false)
  const [token, setToken] = useState(null)
  const [decodedToken, setDecodedToken] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

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

  return (
    <>
      <Church
        title="Adnin Discipleship"
        description="This is Admin page."
        url="/"
        image={defaultImg}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.admin}
        style={{
          height: token ? '' : '60vh',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.admin__heroSection}
        >
          {!decodedToken && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.admin__heroSection__info}
            >
              Log in to Access <br /> Registered Disciples
            </motion.div>
          )}
          {decodedToken && decodedToken.isAdmin && <Allusers />}
        </motion.div>
      </motion.div>
      <RegisterModal
        createRegister={createRegister}
        setCreateRegister={setCreateRegister}
      />
    </>
  )
}

export default Admin
