import React from 'react'

export default function CauseHeader() {
    const dummyCause = {
        title: 'Save the Whales',
        actionPlan: 'First, A, then B, then C.',
        created: '11/13/2019',
        phase: 'start',
        old: false
      }
    return (
      <> <p>{`Created: ${dummyCause.created} Phase: ${dummyCause.phase}`}</p> <h2>{`${dummyCause.title}Action Plan!`}</h2></>
    )
}
