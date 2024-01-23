import React, { useState } from 'react'
import { motion } from 'framer-motion'
import classes from './Faq.module.scss'
import Text from '../text/Text'
import { faqData } from '../../utils/faq'
import ReusableImg from '../img/ReusableImg'
import plusicon from '../../images/plusCircle.png'
import minusicon from '../../images/minusCircle.png'

function Faq() {
  const [faqId, setfaqId] = useState(1)

  const handleFaqId = (id) => {
    setfaqId(id)
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.faq}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.faq__left}
      >
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.faq__left__support}
        >
          support
        </motion.span>
        <Text text={'FAQs'} className={classes.faq__left__caption} />
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.faq__left__description}
        >
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{' '}
          <u>chat to our friendly team.</u>
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.faq__right}
      >
        {faqData.map((data, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.faq__right__container}
            onClick={() => handleFaqId(idx + 1)}
          >
            <motion.div
              style={
                faqId === idx + 1
                  ? {
                      borderRadius: '16px',
                      border: '1px solid var(--Gray-200, #eaecf0)',
                      background: 'var(--Gray-50, #f9fafb)',
                    }
                  : {}
              }
              whileHover={{ scale: 1.09 }}
            //   whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.faq__right__content}
              onClick={() => handleFaqId(idx + 1)}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.faq__right__content__heading__container}
              >
                <Text
                  text={data.caption}
                  className={
                    classes.faq__right__content__heading__container__caption
                  }
                />
                <ReusableImg
                  src={faqId === idx + 1 ? minusicon : plusicon}
                  alt="plus icon"
                  width={'20px'}
                  height={'20px'}
                  className={
                    classes.faq__right__content__heading__container__icon
                  }
                />
              </motion.div>
              {faqId === idx + 1 && (
                <motion.span
                //   initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={classes.faq__right__content__description}
                >
                  {data.description}
                </motion.span>
              )}
            </motion.div>
            {idx !== faqData.length - 1 && (
              <motion.hr
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  height: 1,
                  backgroundColor: '#333',
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Faq
