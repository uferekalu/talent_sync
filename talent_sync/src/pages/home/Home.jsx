import React from 'react'
import { motion } from 'framer-motion'
import classes from './Home.module.scss'
import TalentSync from '../../components/talentSync'
import defaultImg from '../../images/defaultimg.png'
import discover from '../../images/discover.png'
import avatarGroup from '../../images/avatarGroup.png'
import Text from '../../components/text/Text'
import AnimatedButton from '../../components/button/AnimatedButton'
import ReusableImg from '../../components/img/ReusableImg'
import star from '../../images/star.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import microphone from '../../images/microphone.png'
import videoRecorder from '../../images/videoRecorder.png'
import monitor from '../../images/monitor.png'
import faceSmile from '../../images/faceSmile.png'
import messageTxt from '../../images/msgTextCircle.png'
import settings from '../../images/settings.png'
import TileImg from '../../components/tile/TileImg'

const imgData = [
  microphone,
  videoRecorder,
  monitor,
  faceSmile,
  messageTxt,
  settings,
]

function Home() {
  return (
    <>
      <TalentSync
        title="Home TalentSync Assessment"
        description="This is a TalentSync assessment home page."
        url="/"
        image={defaultImg}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.homepage}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.homepage__hero__section}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.homepage__hero__section__left}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={
                classes.homepage__hero__section__left__caption__desktop
              }
            >
              Uniting the world, <br /> one video call at a time
            </motion.span>

            <Text
              text={'Uniting the world, one video call at a time'}
              className={classes.homepage__hero__section__left__caption__mobile}
            />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.homepage__hero__section__left__caption__text}
            >
              Experience the future of communication with ClearLink – <br />{' '}
              where crystal-clear video conferencing meets <br /> unparalleled
              simplicity.
            </motion.span>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.homepage__hero__section__left__discover}
            >
              <AnimatedButton
                text="Start your free trial"
                type="button"
                onClick={() => {}}
                className={
                  classes.homepage__hero__section__left__discover__trialbtn
                }
              />
              <ReusableImg
                src={discover}
                alt="discover"
                width={'20px'}
                height={'20px'}
              />
              <Text
                text={'Discover AI assistant'}
                className={
                  classes.homepage__hero__section__left__discover__text
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.homepage__hero__section__left__avatargroup}
            >
              <ReusableImg
                src={avatarGroup}
                alt="discover"
                width={'200px'}
                height={'50px'}
              />
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={
                  classes.homepage__hero__section__left__avatargroup__rating__container
                }
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={
                    classes.homepage__hero__section__left__avatargroup__rating__container__value
                  }
                >
                  {new Array(5).fill(null).map((_, idx) => (
                    <ReusableImg
                      key={idx}
                      src={star}
                      alt="star"
                      width={'15px'}
                      height={'15px'}
                    />
                  ))}
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={
                      classes.homepage__hero__section__left__avatargroup__rating__container__value__text
                    }
                  >
                    5.0
                  </motion.span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={
                    classes.homepage__hero__section__left__avatargroup__rating__container__value__review
                  }
                >
                  from 3,000+ reviews
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.homepage__hero__section__right}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.homepage__hero__section__right__top}
            >
              <TileImg
                className={
                  classes.homepage__hero__section__right__top__container1
                }
                imgSrc={img1}
              />
              <TileImg
                className={
                  classes.homepage__hero__section__right__top__container2
                }
                imgSrc={img2}
              />
              <TileImg
                className={
                  classes.homepage__hero__section__right__top__container3
                }
                imgSrc={img3}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.homepage__hero__section__right__down}
            >
              <TileImg
                className={
                  classes.homepage__hero__section__right__down__container1
                }
                imgSrc={img4}
              />
              <TileImg
                className={
                  classes.homepage__hero__section__right__down__container2
                }
                imgSrc={img5}
              />
              <TileImg
                className={
                  classes.homepage__hero__section__right__down__container3
                }
                imgSrc={img6}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.homepage__hero__section__right__moreinfo}
            >
              {imgData.map((data, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={
                    classes.homepage__hero__section__right__moreinfo__item
                  }
                >
                  <ReusableImg
                    src={data}
                    alt="star"
                    width={'20px'}
                    height={'20px'}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Home
