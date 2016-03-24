import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

Anchor.displayName = 'Anchor';
Box.displayName = 'Box';
Button.displayName = 'Button';

import CloseIcon from 'grommet/components/icons/base/Close';
import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from 'grommet-presentation/components/Demo';

const code = (
  <List>
    <ListItem responsive={false} justify="between">
      <span>Alan Souza</span>
      <Button plain={true} a11yTitle='Delete Alan Souza user'
        icon={<CloseIcon />} onClick={() => {}} />
    </ListItem>
    <ListItem responsive={false} justify="between">
      <span>Sam Ogami</span>
      <Button plain={true} a11yTitle='Delete Sam Ogami user'
        icon={<CloseIcon />} onClick={() => {}} />
    </ListItem>
  </List>
);

const explanation = 'Present in a lot of Grommet components, it allows for contextual description.';

const Demo5 = () => {
  const codepenAnchor = (
    <Anchor href='http://codepen.io/alansouzati/pen/PNmZEp?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );

  return (
    <Demo explanation={explanation} code={code} anchor={codepenAnchor} />
  );
};

export default Demo5;
