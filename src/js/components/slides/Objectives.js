import React from 'react';

import Bullets from 'grommet-presentation/components/Bullets';
import Bullet from 'grommet-presentation/components/Bullet';

const Objectives = () => {
  return (
    <Bullets>
      <Bullet item='Simple' />
      <Bullet item='Visually Appealing' />
      <Bullet item='Naturally Intuitive' />
      <Bullet item='Modular'>
        <Bullets>
          <Bullet item="Don't pay for what you are not using" />
        </Bullets>
      </Bullet>
      <Bullet item='Responsive' />
      <Bullet item='Accessible' />
    </Bullets>
  );
};

export default Objectives;
