import React from 'react'
import PropTypes from 'prop-types'

function UserCard(props) {
  return (
    <div>
        <p>User name: {props.name}</p>
    </div>
  )
}

export default UserCard