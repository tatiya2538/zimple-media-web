import React from 'react'
import * as Icon from 'react-feather'

export const IconNew = (props) => {
  const IconImage = Icon[props.icon] ? Icon[props.icon] : Icon.Box
  return (
    <IconImage {...props} style={props.style} size={props.size} color={props.color ? props.color : 'currentColor'} />
  )
}
