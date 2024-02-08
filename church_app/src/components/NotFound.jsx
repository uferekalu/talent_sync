import React from 'react'
import Church from './church'


function NotFound() {
  return (
    <div>
      <Church
        title="404 - Not Found"
        description="Sorry, the page you are looking for might not exist."
      />
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might not exist.</p>
    </div>
  )
}

export default NotFound
