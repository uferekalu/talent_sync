import React from 'react'
import TalentSync from './talentSync'
import defaultImg from '../../src/images/defaultimg.png'

function NotFound() {
  return (
    <div>
      <TalentSync
        title="404 - Not Found"
        description="Sorry, the page you are looking for might not exist."
        image={defaultImg}
      />
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might not exist.</p>
    </div>
  )
}

export default NotFound
