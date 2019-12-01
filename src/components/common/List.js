import React from 'react'
import ListItem from './ListItem'

function List({render, data}) {
  return (
    <ul>
      {
        data.map (item => (
          <ListItem render={render (item)} />
        ))
      }
    </ul>
  )
}

export default List
