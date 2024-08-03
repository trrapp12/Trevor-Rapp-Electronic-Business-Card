import React from 'react';
import LinkedIn from './assets/Vector.svg';
import BioPhoto from './assets/Trevor_084.jpg';
import Rapp from './Rapp';
import Photo from './Photo';
import Button from './Button';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  return (
    <div className='app--container'>
      <div className='app--inner-container'>
        <Rapp />
        <div className='app-right-column'>
          <Photo url={BioPhoto} />
          <h1>Front-End Developer</h1>
          <div className='button--container'>
            <Button
              className='button'
              name='Github'
              icon=<i className='lni lni-github-original'></i>
              action='https://github.com/trrapp12'
            />
            <Button
              className='button linkedin'
              name='LinkedIn'
              icon=<img
                src={LinkedIn}
                alt='linkedIn icon'></img>
              action='https://www.linkedin.com/in/trevor-rapp/'
            />
          </div>
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
