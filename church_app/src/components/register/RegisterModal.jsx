/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import GeneralModal from '../modal/GeneralModal'
import signupBg from '../../images/signup.jpg'
import classes from './RegisterModal.module.scss'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedButton from '../button/Button'
import DismissibleAlert from '../alert/AlertComp'

function RegisterModal({ createRegister, setCreateRegister }) {
  const [userData, setUserData] = useState({
    firstname: '',
    surname: '',
    email: '',
    phone: '',
    kit: '',
    address: '',
    city: '',
    state: '',
    country: '',
    medium: ''
  })
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleRegister = async () => {
    try {
      const response = await fetch('https://discipleship.onrender.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      if (!response.ok) {
        const errorMessage = await response.json()
        if (response.status === 400) {
          setErrorMsg(errorMessage.message)
        }
        return
      }
      const data = await response.json()
      if (data.message) {
        setRegistrationSuccess(true)
        setTimeout(() => {
          setCreateRegister(false)
          window.location.reload()
        }, 3000)
      }
      setSuccessMsg(data.message)
      setUserData({
        firstname: '',
        surname: '',
        email: '',
        phone: '',
        kit: '',
        address: '',
        city: '',
        state: '',
        country: '',
        medium: ''
      })
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <GeneralModal
      size="lg"
      show={createRegister}
      onHide={() => {
        setCreateRegister(false)
        window.location.reload()
      }}
      className={classes.create__register}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '5vh',
      }}
    >
      <Modal.Body className={classes.register__form}>
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
        <motion.form className={classes.register__form}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.register__form__header__container}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.register__form__header__container__text}
            >
              Register for February 2024 Diet
            </motion.div>
          </motion.div>
          <AnimatedInput
            type="text"
            placeholder="First name"
            name="firstname"
            value={userData.firstname}
            onChange={handleInputChange}
            className={classes.register__form__firstname}
          />
          <AnimatedInput
            type="text"
            placeholder="Surname"
            name="surname"
            value={userData.surname}
            onChange={handleInputChange}
            className={classes.register__form__surname}
          />
          <AnimatedInput
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className={classes.register__form__email}
          />
          <AnimatedInput
            type="text"
            placeholder="Phone"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            className={classes.register__form__phone}
          />
          <motion.select
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.register__form__select}
            onChange={handleInputChange}
            value={userData.kit}
            name="kit"
          >
            <option value="">Select kit</option>
            <option value="Survival Kit 1">Survival Kit 1</option>
            <option value="Survival Kit 2">Survival Kit 2</option>
            <option value="Arrival Kit">Arrival Kit</option>
          </motion.select>
          <motion.select
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.register__form__select__medium}
            onChange={handleInputChange}
            value={userData.medium}
            name="medium"
          >
            <option value="">Select means of doing the program</option>
            <option value="online">Online</option>
            <option value="Physical (PCN Ikota Church)">{"Physical (PCN Ikota Church)"}</option>
            
          </motion.select>
          <AnimatedInput
            type="text"
            placeholder="Address"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            className={classes.register__form__address}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.register__form__citystate__holder}
          >
            <AnimatedInput
              type="text"
              placeholder="City"
              name="city"
              value={userData.city}
              onChange={handleInputChange}
              className={classes.register__form__citystate__holder__city}
            />
            <AnimatedInput
              type="text"
              placeholder="State"
              name="state"
              value={userData.state}
              onChange={handleInputChange}
              className={
                classes.register__form__citystate__holder__state
              }
            />
          </motion.div>
          <AnimatedInput
            type="text"
            placeholder="Country"
            name="country"
            value={userData.country}
            onChange={handleInputChange}
            className={classes.register__form__country}
          />
          <AnimatedButton
            text="Submit"
            type="button"
            onClick={handleRegister}
            className={classes.register__form__registerBtn}
          />
        </motion.form>
      </Modal.Body>
    </GeneralModal>
  )
}

RegisterModal.propTypes = {
  createRegister: PropTypes.bool.isRequired,
  setCreateRegister: PropTypes.func.isRequired,
}

export default RegisterModal
