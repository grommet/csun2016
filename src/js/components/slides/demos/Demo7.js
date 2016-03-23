import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Distribution from 'grommet/components/Distribution';
import Heading from 'grommet/components/Heading';

import LinkIcon from 'grommet/components/icons/base/Link';

Anchor.displayName = 'Anchor';
Box.displayName = 'Box';
Distribution.displayName = 'Distribution';
Heading.displayName = 'Heading';

import Demo from '../../Demo';

const code = (
  <Box pad={{vertical: 'medium'}}>
    <Heading strong={true} tag='h2'>Machine Utilization</Heading>
    <Distribution size='large' series={[
      {'label': 'Memory', 'value': 40, labelValue: '40%', 'colorIndex': 'warning'},
      {'label': 'CPU', 'value': 10, labelValue: '10%', 'colorIndex': 'ok'},
      {'label': 'Storage', 'value': 60, labelValue: '60%', 'colorIndex': 'critical'}
    ]} />
  </Box>
);

const explanation = 'Shows a graphic of relatively sized items.';

const Demo7 = () => {

  const anchorDoc = (
    <Anchor href='http://www.grommet.io/docs/develop/distribution'
      target='_blank' label='See Docs' icon={<LinkIcon />}
      a11yTitle='See Distribution Docs' />
  );

  return (
    <Demo explanation={explanation} code={code} anchor={anchorDoc} />
  );
};

export default Demo7;
