import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import User from 'grommet/components/icons/base/User';

import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from '../../Demo';

const code = (
  <Box pad={{vertical: 'medium'}} align='center'>
    <Box direction='row'>
      <User />
      <User size='large' />
      <User size='huge' colorIndex="brand" />
    </Box>
  </Box>
);

const explanation = 'Iconography has about 300 hundred icons, all svg. Must have an action to be focusible.';

const Demo3 = () => {

  const iconsDocAnchor = (
    <Anchor href='http://www.grommet.io/docs/develop/icon'
      target='_blank' label='All Icons' icon={<LinkIcon />}
      a11yTitle='See All Icons' />
  );

  return (
    <Demo explanation={explanation} code={code} anchor={iconsDocAnchor} />
  );
};

export default Demo3;
