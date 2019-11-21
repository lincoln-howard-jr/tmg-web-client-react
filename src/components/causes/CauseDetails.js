import React from 'react'

export default function CauseDetails() {
    const dummyCause = {
        title: 'Save the Whales',
        actionPlan: 'First, A, then B, then C.',
        created: '11/13/2019',
        phase: 'start',
        old: false
      }
    return (
        <div className={'cause-details-container'}>
            <p>{dummyCause.actionPlan}</p>
        </div>
    )
}
