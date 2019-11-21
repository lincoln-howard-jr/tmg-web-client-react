import React from 'react'
import CauseList from '../causes/CauseList'
import classNames from 'classnames'

const Sidebar = () => {

  const causeClasses = classNames({
    'profile-sidebar-container':true
  })

    return (
      <div className={causeClasses}>
      <CauseList/>
      </div>
    ) 
  }

export default Sidebar