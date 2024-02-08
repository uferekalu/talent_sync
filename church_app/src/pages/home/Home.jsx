import React from 'react'
import { motion } from 'framer-motion'
import classes from './Home.module.scss'
import Church from '../../components/church'
import defaultImg from '../../images/main_logo.png'
import templeBg from '../../images/temple.jpg'
import Text from '../../components/text/Text'
import AnimatedButton from '../../components/button/Button'
import lordbg from '../../images/jesus1.png'
import disciple1 from '../../images/disciple1.jpg'
import disciple2 from '../../images/disciple2.jpg'
import disciple3 from '../../images/disciple3.jpg'

const relevanceData = [
  {
    icon: 'bi bi-file-earmark-person',
    title: 'About Us',
  },
  {
    icon: 'bi bi-activity',
    title: 'Get involved',
  },
  {
    icon: 'bi bi-airplane-engines-fill',
    title: 'Giving Back',
  },
]

function Home() {
  return (
    <>
      <Church
        title="Home Discipleship"
        description="This is home page."
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
          style={{
            backgroundImage: `url(${templeBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
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
            <motion.img
              src={lordbg}
              alt="logo"
              className={classes.home__heroSection__right__img}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.home__about__heading}
        >
          {" A Disciple that's relevant"}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.home__relevance}
        >
          {relevanceData.map((data) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.home__relevance__content}
              key={data.name}
            >
              <motion.i
                transition={{ duration: 0.5 }}
                style={{
                  color: 'pink',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '30px',
                }}
                className={data.icon}
              />
              <Text
                text={data.title}
                className={classes.home__relevance__content__about}
              />
              <Text
                text="It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised 
              in the 1960s with the release of Letraset sheets containing Lorem 
              Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum"
                className={classes.home__relevance__content__description}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.home__love__compassion}
        >
          Love and compassion
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.home__compassion__detail}
        >
          {`It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised 
              in the 1960s with the release of Letraset sheets containing Lorem 
              Ipsum passages, and more recently with desktop publishing software like Aldus
               PageMaker including versions of Lorem Ipsum`}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.home__disciples__teaching}
        >
          <motion.img
            src={disciple1}
            alt="logo"
            className={classes.home__disciples__teaching__img}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={disciple2}
            alt="logo"
            className={classes.home__disciples__teaching__img}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={disciple3}
            alt="logo"
            className={classes.home__disciples__teaching__img}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}

export default Home
