import React from 'react';

import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';

import Bullets from '../Bullets';
import Bullet from '../Bullet';

const Definition = () => {
  return (
    <Bullets>
      <Bullet item='Open Source UX framework for enterprise'>
        <Bullets>
          <Bullet item='Characteristics of a consumer-grade UX' />
          <Bullet item='Built-in components focused for enterprise'>
            <Paragraph>E.g: Charts, Topology, Meter ...</Paragraph>
          </Bullet>
        </Bullets>
      </Bullet>
      <Bullet item='Reduce the gap from design to development'>
        <Bullets>
          <Bullet item='Get what you asked for' />
        </Bullets>
      </Bullet>
      <Bullet item='Created thinking on Devs not CSS-savvy'>
        <Box pad='large'>
          <img src='/img/css.gif'
            title='Manipulating CSS Animation' />
        </Box>
      </Bullet>
    </Bullets>
  );
};

export default Definition;
