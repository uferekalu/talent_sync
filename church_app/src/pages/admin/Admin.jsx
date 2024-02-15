/* eslint-disable no-undef */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Church from '../../components/church'
import defaultImg from '../../images/main_logo.png'
import classes from './Admin.module.scss'
import Text from '../../components/text/Text'
import AnimatedButton from '../../components/button/Button'
import building from '../../images/building.jpg'
import RegisterModal from '../../components/register/RegisterModal'

function Admin() {
  const [createRegister, setCreateRegister] = useState(false)

  const handleCreateRegister = () => {
    setCreateRegister(true)
  }
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
      >
        <motion.div
          style={{
            backgroundImage: `url(${building})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.admin__heroSection}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.admin__heroSection__left}
          >
            <Text
              text="WELCOME TO DISCIPLESHIP SCHOOL"
              className={classes.admin__heroSection__left__caption}
            />
            <Text
              text="Join our February 2024 diet"
              className={classes.admin__heroSection__left__description}
            />
            <AnimatedButton
              text="Register here"
              onClick={handleCreateRegister}
              className={classes.admin__heroSection__left__learnmore}
              type="button"
            />
          </motion.div>
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
