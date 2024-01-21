import React from 'react'
import { motion } from 'framer-motion'
import classes from './Home.module.scss'
import TalentSync from '../../components/talentSync'
import defaultImg from '../../images/defaultimg.png'

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
        Home page
      </motion.div>
    </>
  )
}

export default Home
