import React from 'react'
import CauseDetails from './CauseDetails'
import CauseHeader from './CauseHeader'
import CauseList from './CauseList'
import styles from './Cause.css'
    
    const CauseContainer = () => {
      return (
        <>
          <CauseHeader />
          <div className={"content-container-flex"}>
            <CauseDetails />
            <CauseList />
          </div>
        </>
      );
    };

export default CauseContainer
