/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import GeneralModal from '../modal/GeneralModal'
import signupBg from '../../images/signup.jpg'
import classes from './Signin.module.scss'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedButton from '../button/Button'
import DismissibleAlert from '../alert/AlertComp'

function SigninModal({ createSignin, setCreateSignin }) {
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleRegister = async () => {
    try {
      const response = await fetch('https://discipleship.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      const data = await response.json()
      if (data.token) {
        localStorage.setItem('userToken', data.token)
        setRegistrationSuccess(true)
        setSuccessMsg('Signed In successfully')
        setTimeout(() => {
          setCreateSignin(false)
          window.location.reload()
        }, 3000)
      }
      setUserData({
        email: '',
        password: '',
      })
    } catch (error) {
      setErrorMsg(error)
    }
  }

  return (
    <GeneralModal
      size="lg"
      show={createSignin}
      onHide={() => {
        setCreateSignin(false)
        window.location.reload()
      }}
      className={classes.create__signin}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '10vh',
      }}
    >
      <Modal.Body className={classes.signin__form}>
        {registrationSuccess && (
          <DismissibleAlert
            variant="success"
            message={successMsg}
            duration={3000}
            onClose={() => setRegistrationSuccess(false)}
          />
        )}
        {errorMsg && (
          <DismissibleAlert
            variant="success"
            message={errorMsg}
            duration={3000}
            onClose={() => setRegistrationSuccess(false)}
          />
        )}
        <motion.form className={classes.signin__form}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.signin__form__header__container}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.signin__form__header__container__text}
            >
              Sign In
            </motion.div>
          </motion.div>
          <AnimatedInput
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className={classes.signin__form__email}
          />
          <AnimatedInput
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={classes.signin__form__password}
          />
          <AnimatedButton
            text="Submit"
            type="button"
            onClick={handleRegister}
            className={classes.signin__form__registerBtn}
          />
        </motion.form>
      </Modal.Body>
    </GeneralModal>
  )
}

SigninModal.propTypes = {
  createSignin: PropTypes.bool.isRequired,
  setCreateSignin: PropTypes.func.isRequired,
}

export default SigninModal
