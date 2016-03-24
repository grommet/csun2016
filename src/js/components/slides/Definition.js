import React from 'react';

import Paragraph from 'grommet/components/Paragraph';

import Bullets from 'grommet-presentation/components/Bullets';
import Bullet from 'grommet-presentation/components/Bullet';

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
          <Bullet item='Designers: Get what you asked for' />
          <Bullet item='Developers: Get something you can implement in reasonable timeframe' />
        </Bullets>
      </Bullet>
      <Bullet item='Created thinking on Devs not CSS-savvy'>
        <img src='/img/css.gif'
          title='Manipulating CSS Animation' />
      </Bullet>
    </Bullets>
  );
};

export default Definition;
