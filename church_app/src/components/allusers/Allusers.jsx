/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as XLSX from 'xlsx'
import classes from './Allusers.module.scss'
import Text from '../text/Text'
import AllUsersContent from './AllusersContent'
import { formatDate } from '../../utils/date'
import AllUsersCategory from './AllUsersCategory'
import RenderPagination from './RenderPagination'
import AnimatedButton from '../button/Button'

function Allusers() {
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedResults, setPaginatedResults] = useState([])
  const [filteredResult, setFilteredResult] = useState([])
  const [paginatedFilteredResult, setPaginatedFilteredResult] = useState([])
  const [filterKit, setFilterKit] = useState('')
  const resultsPerPage = 10

  const handleFilterKitChange = (event) => {
    setFilterKit(event.target.value)
  }

  useEffect(() => {
    const handleFilterkit = () => {
      if (filterKit) {
        const data = registeredUsers.filter((user) => user.kit === filterKit)
        const startIndex = (currentPage - 1) * resultsPerPage
        const endIndex = startIndex + resultsPerPage
        const results = data.slice(startIndex, endIndex)
        setFilteredResult(data)
        setPaginatedFilteredResult(results)
      }
    }
    handleFilterkit()
  }, [filterKit, currentPage, registeredUsers])

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
    console.log('button clicked', num)
    setCurrentPage(num)
  }

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(
      filterKit ? filteredResult : registeredUsers,
    )
    XLSX.utils.book_append_sheet(wb, ws, 'Users Data')
    XLSX.writeFile(wb, 'users_data.xlsx')
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
        className={classes.allusers__select__download__holder}
      >
        <motion.select
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          // className={classes.register__form__select}
          className={classes.allusers__filterKit}
          onChange={handleFilterKitChange}
          value={filterKit}
          name="filterKit"
        >
          <option value="">Select kit</option>
          <option value="Survival Kit 1">Survival Kit 1</option>
          <option value="Survival Kit 2">Survival Kit 2</option>
          <option value="Arrival Kit">Arrival Kit</option>
        </motion.select>
        <AnimatedButton
          text={
            filterKit === 'Survival kit 1'
              ? 'Download Kit 1 Disciples'
              : filterKit === 'Survival Kit 2'
                ? 'Download Kit 2 Disciples'
                : filterKit === 'Arrival Kit'
                  ? 'Download Arrival Kit Disciples'
                  : 'Download All Disciples'
          }
          onClick={exportToExcel}
          className={classes.allusers__select__download__btn}
          type="button"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.allusers__content}
      >
        {filterKit
          ? paginatedFilteredResult?.map((result) => (
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
            ))
          : paginatedResults?.map((result) => (
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
        totalResults={
          filterKit ? filteredResult?.length : registeredUsers?.length
        }
        resultsPerPage={resultsPerPage}
        handleCurrentPage={handleCurrentPage}
        currentPage={currentPage}
      />
    </motion.div>
  )
}

export default Allusers
