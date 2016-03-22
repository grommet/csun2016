import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Menu from 'grommet/components/Menu';
import Section from 'grommet/components/Section';
import SkipLinkAnchor from 'grommet/components/SkipLinkAnchor';
import Footer from 'grommet/components/Footer';

Anchor.displayName = 'Anchor';
Box.displayName = 'Box';
Menu.displayName = 'Menu';
Label.displayName = 'Label';
Section.displayName = 'Section';
Heading.displayName = 'Heading';
Footer.displayName = 'Footer';

import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from '../../Demo';

const code = (
  <Box pad={{vertical: 'medium'}}>
    <Box colorIndex="neutral-3" pad={{ horizontal: 'small' }}>
      <Menu label="Menu" inline={true} direction="row">
        <a href="#">Sports</a>
        <a href="#">Politics</a>
        <a href="#">Arts</a>
        <a href="#">Happening now</a>
      </Menu>
    </Box>
    <Section primary={true}>
      <Box>
        <Box pad={{ vertical: 'small' }} separator="top">
          <Label uppercase={true}>Breaking News</Label>
        </Box>
        <Box direction='row' justify='between'>
          <Heading tag='h2'><a href='#'>Jennision is hosting a
            party in downtown San Diego, tonight!</a></Heading>
          <Box colorIndex="light-2" pad='large'>
            <SkipLinkAnchor label='Right Panel' />
            <Heading tag='h3'><a href='#'>Sign-up</a></Heading>
            <Heading tag='h3'><a href='#'>Cancel RSVP</a></Heading>
          </Box>
        </Box>
      </Box>
    </Section>
    <Footer primary={true} colorIndex='neutral-4'
      align='center' justify='center' pad='large'>
      Build your ideas with <a href='http://grommet.io' target='_blank'>Grommet</a>!
    </Footer>
  </Box>
);

const explanation = 'A component to allow for custom Skip Links.';

const Demo2 = () => {
  const codepenAnchor = (
    <Anchor href='http://codepen.io/alansouzati/pen/QNpRWJ?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );
  return (
    <Demo explanation={explanation} code={code}
      anchor={codepenAnchor} />
  );
};

export default Demo2;
