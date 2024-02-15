import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import PropTypes from 'prop-types'

function DismissibleAlert({ variant, message, duration, onClose }) {
  const [showAlert, setShowAlert] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false)
      onClose() 
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div>
      {showAlert && (
        <Alert
          variant={variant}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {message}
        </Alert>
      )}
    </div>
  )
}

DismissibleAlert.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default DismissibleAlert
