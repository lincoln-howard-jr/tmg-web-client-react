import React from 'react'

function ListItem({render}) {
  return (
    <li>
      {render ()}
    </li>
  )
}

export default ListItem
