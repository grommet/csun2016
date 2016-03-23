import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Heading from 'grommet/components/Heading';

import LinkIcon from 'grommet/components/icons/base/Link';

Anchor.displayName = 'Anchor';
Box.displayName = 'Box';
Meter.displayName = 'Meter';
Heading.displayName = 'Heading';

import Demo from '../../Demo';

const series = [
  {'label': 'Memory', 'value': 40, labelValue: '40%', 'colorIndex': 'warning'},
  {'label': 'CPU', 'value': 10, labelValue: '10%', 'colorIndex': 'ok'},
  {'label': 'Storage', 'value': 60, labelValue: '60%', 'colorIndex': 'critical'}
];

const code = (
  <Box direction='row' justify='center' pad={{vertical: 'small'}}>
    <Box separator='top' pad='small' align='center'>
      <Heading strong={true} tag='h3'>Machine Utilization</Heading>
      <Meter size='large' series={series} a11yTitleId='machine-utilization'
        a11yDescId='machine-utilization-desc' />
    </Box>

    <Box separator='top' pad='small' align='center'>
      <Heading strong={true} tag='h3'>Update progress</Heading>
      <Meter size='large' max={100} value={40} units='%' a11yTitleId='update-progress'
        a11yDescId='update-progress-desc' />
    </Box>

    <Box separator='top' pad='small' align='center'>
      <Heading strong={true} tag='h3'>Drinking Speed (Jennision)</Heading>
      <Meter type='arc' value={6} units='BPM'
        a11yTitleId='drinking-speed' a11yDescId='drinking-speed-desc'
        min={{'value': 0, 'label': '0 BPH'}}
        max={{'value': 10, 'label': '10 BPH'}}
        thresholds={[
          {'label': 'Happy', 'value': 5, 'colorIndex': 'warning'},
          {'label': 'Drunk', 'value': 7, 'colorIndex': 'error'}
        ]} />
    </Box>
  </Box>
);

const explanation = 'Shows a bar, arc, or circular meter graphic..';

const Demo8 = () => {

  const anchorDoc = (
    <Anchor href='http://www.grommet.io/docs/develop/meter'
      target='_blank' label='See Docs' icon={<LinkIcon />}
      a11yTitle='See Meter Docs' />
  );

  return (
    <Demo explanation={explanation} code={code} anchor={anchorDoc} />
  );
};

export default Demo8;
