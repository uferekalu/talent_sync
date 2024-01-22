import React from 'react'
import { motion } from 'framer-motion'
import classes from './ChooseClearLink.module.scss'
import ChooseClearContent from './ChooseClearContent'
import videRecorder from '../../images/videoRecorder2.png'
import recording from '../../images/recording.png'
import calender from '../../images/calendar.png'
import lockunlocked from '../../images/lockUnlocked.png'
import ReusableImg from '../img/ReusableImg'
import picstile from '../../images/picstile.png'
import handArrow from '../../images/handDrawnArrow.png'

const clearContentData = [
  {
    sym: videRecorder,
    caption: 'Crystal-clear HD video',
    description:
      'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.',
  },
  {
    sym: recording,
    caption: 'Noise-canceling audio',
    description:
      'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.',
  },
  {
    sym: calender,
    caption: 'Scheduling made easy',
    description:
      "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    sym: lockunlocked,
    caption: 'Bank-grade security',
    description:
      'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.',
  },
]

function ChooseClearLink() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.clearlink}
    >
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.clearlink__caption}
      >
        The ClearLink Advantage
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.clearlink__why}
      >
        Why choose ClearLink?
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.clearlink__reason}
      >
        In a world where connection is everything, ClearLink takes the lead. Our{' '}
        <br /> cutting-edge video conferencing app offers:
      </motion.span>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.clearlink__details}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.clearlink__details__left}
        >
          {clearContentData.map((data, idx) => (
            <ChooseClearContent
              key={idx}
              src={data.sym}
              alt={data.caption.slice(0, 1)}
              text={data.caption}
              desc={data.description}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.clearlink__details__right}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.clearlink__details__right__content__desktop}
          >
            <ReusableImg
              src={handArrow}
              alt={'handarrow'}
              width={'200px'}
              height={'145px'}
              className={
                classes.clearlink__details__right__content__desktop__handarrow
              }
            />
            <ReusableImg
              src={picstile}
              alt={'pictile'}
              width={'500px'}
              height={'480px'}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.clearlink__details__right__content__mobile}
          >
            <ReusableImg src={picstile} alt={'pictile'} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ChooseClearLink
