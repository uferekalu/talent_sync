/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { motion } from 'framer-motion'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GeneralModal from '../modal/GeneralModal'
import signupBg from '../../images/signup.jpg'
import classes from './SuccessModal.module.scss'

function SuccessModal({
  createSuccessModal,
  setCreateSuccessModal,
  successMsg,
  isError,
}) {
  return (
    <GeneralModal
      size="768px"
      show={createSuccessModal}
      onHide={() => {
        setCreateSuccessModal(false)
        window.location.reload()
      }}
      className={classes.successModal}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '20vh',
      }}
    >
      <Modal.Body className={classes.successModalContainer}>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.successModalContainer__close}
          onClick={() => {
            setCreateSuccessModal(false)
            window.location.reload()
          }}
        >
          &times;
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.successModalContainer__iconHolder}
        >
          {!isError && (
            <FontAwesomeIcon
              style={{
                fontSize: '30px',
                color: 'green',
                fontWeight: 700,
              }}
              icon={faCheck}
              className="fa-solid fa-check"
            />
          )}
          {isError && (
            <FontAwesomeIcon
              style={{
                fontSize: '30px',
                color: 'red',
                fontWeight: 700,
              }}
              icon={faTimes}
              className="fa-solid fa-times"
            />
          )}
        </motion.div>
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={
            isError
              ? `${classes.successModalContainer__error}`
              : `${classes.successModalContainer__text}`
          }
        >
          {successMsg}
        </motion.span>
      </Modal.Body>
    </GeneralModal>
  )
}

SuccessModal.propTypes = {
  createSuccessModal: PropTypes.bool.isRequired,
  setCreateSuccessModal: PropTypes.func.isRequired,
  successMsg: PropTypes.string.isRequired,
  isError: PropTypes.bool,
}

export default SuccessModal
