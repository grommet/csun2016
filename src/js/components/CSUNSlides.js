import React from 'react';

import Slides from './Slides';
import Slide from './Slide';

import Home from './slides/Home';
import Overview from './slides/Overview';
import Motivation from './slides/Motivation';
import Objectives from './slides/Objectives';
import TechnologyStack from './slides/TechnologyStack';
import SampleApp from './slides/SampleApp';
import AccessibilityCore from './slides/AccessibilityCore';
import CallToAction from './slides/CallToAction';
import ThankYou from './slides/ThankYou';
import Demo1 from './slides/demos/Demo1';
import Demo2 from './slides/demos/Demo2';

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
      <Slide title='Grommet Objectives' id='objectives'>
        <Objectives />
      </Slide>
      <Slide title='Technology Stack' id='tech-stack'>
        <TechnologyStack />
      </Slide>
      <Slide id='sample-app'>
        <SampleApp />
      </Slide>
      <Slide title='Accessibility is core' id='a11y-core'>
        <AccessibilityCore />
      </Slide>
      <Slide title='Demo #1 <SkipLinks />' id='demo-1'>
        <Demo1 />
      </Slide>
      <Slide title='Demo #2 <SkipLinkAnchor />' id='demo-2'>
        <Demo2 />
      </Slide>
      <Slide title='Call to Action' id='call-to-action'>
        <CallToAction />
      </Slide>
      <Slide title="Thank You" id='final-notes'>
        <ThankYou />
      </Slide>
    </Slides>
  );
};

export default CSUNSlides;
