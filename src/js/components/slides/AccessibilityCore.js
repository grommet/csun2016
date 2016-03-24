import React from 'react';

import Paragraph from 'grommet/components/Paragraph';

import Bullets from 'grommet-presentation/components/Bullets';
import Bullet from 'grommet-presentation/components/Bullet';

const AccessibilityCore = () => {
  return (
    <Bullets>
      <Bullet item='Guidelines for designers and developers'>
        <Bullets>
          <Bullet item='Patterns' />
          <Bullet item='Components' />
        </Bullets>
      </Bullet>
      <Bullet item='Accessible Templates and Applications' />
      <Bullet item='Balance'>
        <Paragraph>
          automate accessiblity when possible and make it configurable when needed
        </Paragraph>
      </Bullet>
      <Bullet item='Documentation' />
    </Bullets>
  );
};

export default AccessibilityCore;
