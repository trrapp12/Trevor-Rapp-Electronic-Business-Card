import React from 'react'

const Photo = (props) => {
  return (
    <>
      <img src={props.url} className='photo'></img>
    </>
  )
}

export default Photo