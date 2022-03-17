import React from 'react'



const Footer = (props) => {

  const iconsObjectArray = [
    {
      class: "lni lni-html5",
      url : "https://github.com/trrapp12/Product-Page"
    },
    {
      class: "lni lni-css3",
      url : "https://github.com/trrapp12/diana-tribute"
    },
    {
      class: "lni lni-javascript",
      url : "https://github.com/trrapp12/Slap-Happy"
    },
    {
      class: "lni lni-react",
      url : "https://github.com/trrapp12/React-Jokes"
    },
    {
      class: "lni lni-nodejs",
      url : "https://trrapp12.github.io/REACT-AirBNB-Clone/"
    },
    {
      class: "lni lni-python",
      url : "https://github.com/trrapp12/object_oriented_hangman"
    },
    {
      class: "lni lni-github-original",
      url : "https://github.com/trrapp12"
    },
    {
      class: "lni lni-git",
      url : "https://github.com/trrapp12"
    },
    {
      class: "lni lni-angular",
      url : "https://github.com/trrapp12/avengers_agents_of_shield_directory"
    },
    {
      class: "lni lni-adobe",
      url : "https://github.com/trrapp12/Flex_Box_Photo_Portfolio"
    }
  ];

  const iconsArrayOutput = iconsObjectArray.map((input) => {
    return <div className="button--icon"><a href={input.url} target="_default" ><i className={input.class} ></i></a></div>
  })

  return (
    <div className="footer--container">
      {iconsArrayOutput}
    </div>
  )
}

export default Footer

