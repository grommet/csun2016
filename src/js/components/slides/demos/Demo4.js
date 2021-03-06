import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

Anchor.displayName = 'Anchor';
Box.displayName = 'Box';
Button.displayName = 'Button';

import UserIcon from 'grommet/components/icons/base/User';
import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from 'grommet-presentation/components/Demo';

const code = (
  <Box pad={{vertical: 'medium'}} align='center'>
    <Box pad='small'>
      <Anchor href='http://www.grommet.io/docs/develop/icon'
        large='_blank' icon={<UserIcon size='large' />} />
    </Box>

    <Box pad='small'>
      <Button plain={true} icon={<UserIcon size='large' />} onClick={() => {}} />
    </Box>
  </Box>
);

const explanation = 'Anchors and Buttons can receive an icon property to provide actions.';

const Demo4 = () => {

  const anchorDoc = (
    <Anchor href='http://www.grommet.io/docs/develop/icon'
      target='_blank' label='All Icons' icon={<LinkIcon />}
      a11yTitle='See All Icons' />
  );

  return (
    <Demo explanation={explanation} code={code} anchor={anchorDoc} />
  );
};

export default Demo4;
