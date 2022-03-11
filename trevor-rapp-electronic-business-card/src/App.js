import React from 'react'
import ReactDOM from 'react-dom'
import Rapp from './Rapp'
import Photo from './Photo'
import Button from './Button'
import Content from './Content'
import Footer from './Footer'



const App = (props) => {
  return(
    <div className="container">
      <Rapp />
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
      <Content />
      <Footer />
    </div>

  )
}

export default App