import React from 'react'

const Button = (props) => {
  return (
      <form action={props.action} method="get" target="_blank">
        <button className={props.class} type="submit">{props.icon}{props.name}</button>
      </form>
    
  )
}

export default Button