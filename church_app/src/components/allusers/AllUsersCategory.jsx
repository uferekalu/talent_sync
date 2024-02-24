import React from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types'
import classes from './Allusers.module.scss'

function AllUsersCategory({ title, value }) {
    return (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.allusers__categories__totalholder}
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.allusers__categories__totalholder__caption}
          >
            {title}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.allusers__categories__totalholder__number}
          >
            {value}
          </motion.span>
        </motion.div>
    )
}

AllUsersCategory.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}
export default AllUsersCategory