import React from 'react';

import Bullets from '../Bullets';
import Bullet from '../Bullet';

const Overview = () => {
  return (
    <Bullets>
      <Bullet item='About Grommet'>
        <Bullets>
          <Bullet item='Basics' />
          <Bullet item='Accessibility Commitment' />
        </Bullets>
      </Bullet>
      <Bullet item='Live Demo' />
      <Bullet item='Call to Action' />
    </Bullets>
  );
};

export default Overview;
