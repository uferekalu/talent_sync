import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function CheckAgreement({ isChecked, setIsChecked, setErrorMsg }) {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setErrorMsg((prevState) => ({
        ...prevState,
        confirmAgreement: ""
    }))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCheckboxChange()
    }
  }

  return (
    <div
      onClick={handleCheckboxChange}
      onKeyPress={handleKeyPress}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <motion.div
        style={{
          width: '30px',
          maxWidth: '30px',
          minWidth: '30px',
          height: 24,
          border: '2px solid #333',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isChecked ? '#4CAF50' : '#fff',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: isChecked ? 1.1 : 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isChecked && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: 16, height: 16 }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          >
            <path d="M20 6L9 17l-5-5" />
          </motion.svg>
        )}
      </motion.div>
      <span
        style={{
          fontSize: '14px',
          marginLeft: 10,
          backgroundColor: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontStyle: "italic"
        }}
      >
        This course is an intense 13-week course. Do you agree to put in time
        and effort required to get the most out of the course?
      </span>
    </div>
  )
}

CheckAgreement.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func,
  setErrorMsg: PropTypes.func
}

CheckAgreement.defaultProps = {
  setIsChecked: () => {},
  setErrorMsg: () => {},
}

export default CheckAgreement
