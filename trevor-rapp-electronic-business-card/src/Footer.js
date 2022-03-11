import React from 'react'



const Footer = (props) => {

  const iconsArray = ["lni lni-html5","lni lni-css3","lni lni-javascript","lni lni-react","lni lni-nodejs","lni lni-python","lni lni-github-original","lni lni-git","lni lni-angular","lni lni-adobe"];

  const iconsArrayOutput = iconsArray.map((input) => {
    return <i className={input}></i>
  })

  return (
    <div className="footer--container">
      {iconsArrayOutput}
    </div>
  )
}

export default Footer

