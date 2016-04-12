import React from 'react';

import Slides from 'grommet-presentation/components/Slides';
import Slide from 'grommet-presentation/components/Slide';

import Home from './slides/Home';
import Definition from './slides/Definition';
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
import Demo3 from './slides/demos/Demo3';
import Demo4 from './slides/demos/Demo4';
import Demo5 from './slides/demos/Demo5';
import Demo6 from './slides/demos/Demo6';
import Demo7 from './slides/demos/Demo7';
import Demo8 from './slides/demos/Demo8';
import Demo9 from './slides/demos/Demo9';

const CSUNSlides = () => {
  return (
    <Slides>
      <Slide align='center' justify='center' id='home' full={true}>
        <Home />
      </Slide>
      <Slide title='Overview' id='overview'>
        <Overview />
      </Slide>
      <Slide title='What is Grommet?' id='definition'>
        <Definition />
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
      <Slide title='Demo #3 <Icon />' id='demo-3'>
        <Demo3 />
      </Slide>
      <Slide title='Demo #4 <Anchor /> and <Button />' id='demo-4'>
        <Demo4 />
      </Slide>
      <Slide title='Demo #5 <... a11yTitle />' id='demo-5'>
        <Demo5 />
      </Slide>
      <Slide title='Demo #6 <Layer /> <Form />' id='demo-6'>
        <Demo6 />
      </Slide>
      <Slide title='Demo #7 <Distribution />' id='demo-7'>
        <Demo7 />
      </Slide>
      <Slide title='Demo #8 <Meter />' id='demo-8'>
        <Demo8 />
      </Slide>
      <Slide title='Demo #9 <Chart />' id='demo-9'>
        <Demo9 />
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
