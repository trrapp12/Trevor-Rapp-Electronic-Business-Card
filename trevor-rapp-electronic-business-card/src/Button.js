import React from 'react'

const Button = (props) => {
  return (
    <form action={props.action} method="get" target="_blank">
      <button type="submit">{props.name}</button>
    </form>
    
  )
}

export default Button