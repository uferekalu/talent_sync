/* eslint-disable import/prefer-default-export */
export function formatDate(inputDate) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options)
    return formattedDate
  }