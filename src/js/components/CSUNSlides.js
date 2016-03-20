import React from 'react';

import Slides from './Slides';
import Slide from './Slide';

import Home from './slides/Home';
import Overview from './slides/Overview';
import Motivation from './slides/Motivation';

const CSUNSlides = () => {
  return (
    <Slides>
      <Slide align='center' justify='center' id='home'>
        <Home />
      </Slide>
      <Slide title='Overview' id='overview'>
        <Overview />
      </Slide>
      <Slide title='Motivation' id='motivation'>
        <Motivation />
      </Slide>
    </Slides>
  );
};

export default CSUNSlides;
