import React from 'react'



const Footer = (props) => {

  const iconsObjectArray = [
    {
      class: "lni lni-html5",
      url : "https://trrapp12.github.io/Product-Page/"
    },
    {
      class: "lni lni-css3",
      url : "https://www.dianarapp.com/"
    },
    {
      class: "lni lni-javascript",
      url : "https://trrapp12.github.io/Slap-Happy/"
    },
    {
      class: "lni lni-react",
      url : "https://trrapp12.github.io/React-Jokes/"
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
      url : "https://trrapp12.github.io/avengers_agents_of_shield_directory/#/list"
    },
    {
      class: "lni lni-adobe",
      url : "https://github.com/trrapp12/Flex_Box_Photo_Portfolio"
    }
  ];
   
  const iconsArrayOutput = iconsObjectArray.map((input, index) => {
    let buttonKey = ("button" + index);
    let aKey = ("a" + index);
    let iKey = ("i" + index)
    return <button key={buttonKey} className="button--icon"><a className="button--a" key={aKey} href={input.url} target="_blank" ><i key={iKey} className={input.class} ></i></a></button>
  })

  return (
    <div className="footer--container">
      {iconsArrayOutput}
    </div>
  )
}

export default Footer

