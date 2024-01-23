import React from 'react'
import classes from './Base.module.scss'
import { motion } from 'framer-motion'
import ReusableImg from '../img/ReusableImg'
import logo from '../../images/logo.png'
import Text from '../text/Text'
import BaseContent from './BaseContent'
import { baseData1, baseData2, baseData3, baseData4 } from '../../utils/footer'
import appStore from '../../images/appStore.png'
import playStore from '../../images/googlePlay.png'

function BaseComp() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.basefooter}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.basefooter__clearlink}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.basefooter__clearlink__caption}
        >
          <ReusableImg src={logo} alt="logo" width={'20px'} height={'25px'} />
          <Text
            text={'ClearLink'}
            className={classes.basefooter__clearlink__caption__text}
          />
          <Text
            text={'.'}
            className={classes.basefooter__clearlink__caption__dot}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.basefooter__clearlink__description}
        >
          <Text
            text={
              'ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!'
            }
            className={classes.basefooter__clearlink__description__text}
          />
        </motion.div>
      </motion.div>
      <BaseContent data={baseData1} />
      <BaseContent data={baseData2} />
      <BaseContent data={baseData3} />
      <BaseContent data={baseData4} />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.basefooter__get__app}
      >
        <Text
          text={'Get the app'}
          className={classes.basefooter__get__app__caption}
        />
        <ReusableImg
          src={appStore}
          alt="app store"
          width={'100px'}
          height={'30px'}
          className={classes.basefooter__get__app__store}
        />
        <ReusableImg
          src={playStore}
          alt="play store"
          width={'100px'}
          height={'30px'}
          className={classes.basefooter__get__app__store}
        />
      </motion.div>
    </motion.div>
  )
}

export default BaseComp
