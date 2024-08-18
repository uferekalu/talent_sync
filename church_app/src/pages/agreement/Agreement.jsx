import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Church from '../../components/church'
import classes from './Agreement.module.scss'
import defaultImg from '../../images/main_logo.png'
import Text from '../../components/text/Text'
import AnimatedButton from '../../components/button/Button'

function Agreement() {
  const navigate = useNavigate()
  return (
    <>
      <Church
        title="Agreement Discipleship"
        description="This is agreement page."
        url="/agreement"
        image={defaultImg}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.agreement}
      >
        <Text
          text="Course Instructions"
          className={classes.agreement__caption}
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.agreement__content}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.agreement__instruction}
          >
            Kindly note that each of these courses is an intense 13-week course
            work. Therefore, all through the duration of the course, we will
            require your commitment to the following:
          </motion.div>
          <Text
            text="* Daily Bible study using the course daily manual"
            className={classes.agreement__keypoint}
          />
          <Text
            text="* Weekly Contact session/meeting every Friday (6:00PM, GMT+1)"
            className={classes.agreement__keypoint}
          />
          <Text
            text="* Regular study/prayer/sermon journaling"
            className={classes.agreement__keypoint}
          />
          <Text
            text="* Recitation of the weekly memory verses"
            className={classes.agreement__keypoint}
          />
          <Text
            text="* Submission of assignments and full participation in all class activities"
            className={classes.agreement__keypoint}
          />
          <Text
            text="* Participation in the Faith Declaration Conference at the end of the diet"
            className={classes.agreement__keypoint}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.agreement__instruction}
          >
            We strongly advice that you proceed to complete the registration
            only after carefully considering your schedule for the next 3
            months.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.agreement__instruction}
          >
            In the event that you cannot guarantee your availability to fulfil
            above-listed obligations, our recommendation is to discontinue
            registration. Our doors are always open for your registration in our
            next diets when your schedule allows for full participation.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.agreement__agreeBtnHolder}
          >
            <AnimatedButton
              text="Cancel"
              onClick={() => navigate("/")}
              className={classes.agreement__cancelBtn}
              type="button"
            />
            <AnimatedButton
              text="I have Agreed To Proceed"
              onClick={() => navigate("/?hasAccepted=true")}
              className={classes.agreement__agreeBtn}
              type="button"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Agreement
