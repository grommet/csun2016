import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Bullets from '../Bullets';
import Bullet from '../Bullet';

const CallToAction = () => {

  const slackMessage = (
    <span>
      Join our <Anchor href='http://slackin.grommet.io' target='_blank'
        label='Slack channel' /> today
    </span>
  );
  return (
    <Bullets>
      <Bullet item='Grommet is open-source'>
        <Bullets>
          <Bullet item='Build'/>
          <Bullet item='Test'/>
          <Bullet item='File Issues'/>
          <Bullet item='Send Contributions'/>
        </Bullets>
      </Bullet>
      <Bullet item={slackMessage} />
    </Bullets>
  );
};

export default CallToAction;
