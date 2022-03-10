import React from 'react'

const iconsArray = ['<i class="lni lni-html5"></i>','<i class="lni lni-css3"></i>','<i class="lni lni-javascript"></i>','<i class="lni lni-react"></i>','<i class="lni lni-nodejs"></i>','<i class="lni lni-python"></i>','<i class="lni lni-github-original"></i>','<i class="lni lni-git"></i>','<i class="lni lni-angular"></i>','<i class="lni lni-adobe"></i>'];



const Footer = (props) => {
  return (
    <div className="footer--container">
      {iconsArray}
    </div>
  )
}

export default Footer