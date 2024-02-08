import React from 'react'
import { motion } from 'framer-motion'
import classes from './Home.module.scss'
import Church from '../../components/church'
import defaultImg from '../../images/main_logo.png'
import templeBg from '../../images/temple.jpg'
import Text from '../../components/text/Text'
import AnimatedButton from '../../components/button/Button'

function Home() {
  return (
    <>
      <Church
        title="Home Blog Post"
        description="This is a blog post on the home page."
        url="/"
        image={defaultImg}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.home}
      >
        <motion.div
          style={{ backgroundImage: `url(${templeBg})` }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.home__heroSection}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.home__heroSection__left}
          >
            <Text
              text="WELCOME TO DISCIPLESHIP"
              className={classes.home__heroSection__left__caption}
            />
            <Text
              text="Join our diet"
              className={classes.home__heroSection__left__description}
            />
            <AnimatedButton
              text="Learn More"
              onClick={() => {}}
              className={classes.home__heroSection__left__learnmore}
              type="button"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.home__heroSection__right}
          >
            right
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Home
