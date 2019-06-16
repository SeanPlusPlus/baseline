import React from 'react'
import PropTypes from 'prop-types'


function UUID({ uuid }) {
  return (
    <code>{uuid}</code>
  )
}

UUID.propTypes = {
  uuid: PropTypes.string.isRequired,
}

export default UUID
