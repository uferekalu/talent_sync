/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import GeneralModal from '../modal/GeneralModal'
import signupBg from '../../images/signup.jpg'
import classes from './RegisterModal.module.scss'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedSelect from '../select/AnimatedSelect'
import AnimatedButton from '../button/Button'

function RegisterModal({ createRegister, setCreateRegister }) {
  const [userData, setUserData] = useState({
    firstname: '',
    surname: '',
    email: '',
    phone: '',
    kit: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleRegister = () => {

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
        marginTop: '10vh',
      }}
    >
      <Modal.Body className={classes.register__form}>
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
          <AnimatedSelect
            text="Authenticate"
            options={[
              { value: 'survivalkiti', label: 'Survival Kit 1' },
              { value: 'survivalkit2', label: 'Survival Kit 2' },
              { value: 'arrivalkit', label: 'Arrival Kit' },
              
            ]}
            onChange={handleInputChange}
            className={classes.register__form__select}
          />
          <AnimatedButton
            text="Submit"
            type="submit"
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
