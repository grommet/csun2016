import React from 'react';

import Bullets from 'grommet-presentation/components/Bullets';
import Bullet from 'grommet-presentation/components/Bullet';

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
