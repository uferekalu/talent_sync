/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import classes from './Allusers.module.scss'
import Text from '../text/Text'
import AllUsersContent from './AllusersContent'
import { formatDate } from '../../utils/date'
import AllUsersCategory from './AllUsersCategory'
import RenderPagination from './RenderPagination'

function Allusers() {
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedResults, setPaginatedResults] = useState([])
  const resultsPerPage = 8

  console.log('paginated results', paginatedResults)

  useEffect(() => {
    const startIndex = (currentPage - 1) * resultsPerPage
    const endIndex = startIndex + resultsPerPage
    const results = registeredUsers.slice(startIndex, endIndex)
    setPaginatedResults(results)
  }, [currentPage, registeredUsers])

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      const userData = JSON.parse(localStorage.getItem('discipleData'))
      if (userData) {
        setRegisteredUsers(userData)
      }
    }
    fetchRegisteredUsers()
  }, [])

  const handleCurrentPage = (num) => {
    console.log("button clicked", num)
    setCurrentPage(num)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.allusers}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.allusers__caption__holder}
      >
        <Text
          text="All Registered Disciples"
          className={classes.allusers__caption__holder__text}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.allusers__categories}
      >
        <AllUsersCategory
          title="Total Registered Disciples:"
          value={registeredUsers?.length}
        />
        <AllUsersCategory
          title="Disciples for Arrival Kit:"
          value={
            registeredUsers.filter((user) => user.kit === 'Arrival Kit').length
          }
        />
        <AllUsersCategory
          title="Disciples for Survival Kit 1:"
          value={
            registeredUsers.filter((user) => user.kit === 'Survival Kit 1')
              .length
          }
        />
        <AllUsersCategory
          title="Disciples for Survival Kit 2:"
          value={
            registeredUsers.filter((user) => user.kit === 'Survival Kit 2')
              .length
          }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.allusers__content}
      >
        {paginatedResults?.map((result) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.allusers__content__detail}
            key={result._id}
          >
            <AllUsersContent
              caption="Name"
              detail={`${result.firstname} ${result.surname}`}
            />
            <AllUsersContent caption="Address" detail={result.address} />
            <AllUsersContent caption="Kit" detail={result.kit} />
            <AllUsersContent caption="City" detail={result.city} />
            <AllUsersContent caption="State" detail={result.state} />
            <AllUsersContent caption="Country" detail={result.country} />
            <AllUsersContent caption="Pnone" detail={`${result.phone}`} />
            <AllUsersContent caption="Email" detail={`${result.email}`} />
            <AllUsersContent caption="Medium" detail={result.medium} />
            <AllUsersContent caption="Diet" detail={result.diet} />
            <AllUsersContent
              caption="Date Registered"
              detail={formatDate(result.createdAt)}
            />
          </motion.div>
        ))}
      </motion.div>
      <RenderPagination
        totalResults={registeredUsers?.length}
        resultsPerPage={resultsPerPage}
        handleCurrentPage={handleCurrentPage}
        currentPage={currentPage}
      />
    </motion.div>
  )
}

export default Allusers
