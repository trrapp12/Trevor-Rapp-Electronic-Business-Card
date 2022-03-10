import React from 'react'
import ReactDOM from 'react-dom'
import Photo from './Photo'
import Button from './Button'
import Footer from './Footer'


const App = (props) => {
  return(
    <>
      <Photo />
      <h1>Welcome</h1>

      <Button 
        name="Github"
        action="https://github.com/trrapp12"
      />
      <Button 
        name="LinkedIn"
        action="https://www.linkedin.com/in/trevor-rapp/"
      />
      <Button 
        name="Email"
        action="mailto: trrapp@gmail.com"
      />
      <Footer />
    </>

  )
}

export default App