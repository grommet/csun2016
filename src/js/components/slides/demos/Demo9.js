import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Chart from 'grommet/components/Chart';
import Heading from 'grommet/components/Heading';

import LinkIcon from 'grommet/components/icons/base/Link';

Anchor.displayName = 'Anchor';
Box.displayName = 'Box';
Chart.displayName = 'Chart';
Heading.displayName = 'Heading';

import Demo from 'grommet-presentation/components/Demo';

const code = (
  <Box pad={{vertical: 'medium'}}>
    <Heading strong={true} tag='h3'>Jennison vs Sam (BPH) </Heading>
    <Chart series={[
      {
        'label': 'Jennison',
        'values': [[7, 3], [6, 5], [5, 5], [4, 8], [3, 3], [2, 8], [1, 6]],
        'colorIndex': 'graph-1'
      },
      {
        'label': 'Sam',
        'values': [[7, 0], [6, 1], [5, 0], [4, 0], [3, 0], [2, 1], [1, 1]],
        'colorIndex': 'graph-2'
      }
    ]} max={10} threshold={7} type='area' legend={{}} points={true} xAxis={{
      'placement': 'bottom',
      'data': [
        {'label': 'Fri', 'value': 7},
        {'label': 'Thurs', 'value': 6},
        {'label': 'Wed', 'value': 5},
        {'label': 'Tue', 'value': 4},
        {'label': 'Mon', 'value': 3},
        {'label': 'Sun', 'value': 2},
        {'label': 'Sat', 'value': 1}
      ]
    }} units='BPH' thresholds={[
      {'label': 'OK', 'value': 0, 'colorIndex': 'ok'},
      {'label': 'Warning', 'value': 5, 'colorIndex': 'warning'},
      {'label': 'Error', 'value': 7, 'colorIndex': 'error'}
    ]} />
  </Box>
);

const explanation = 'Shows a graphical data chart.';

const Demo9 = () => {

  const anchorDoc = (
    <Anchor href='http://www.grommet.io/docs/develop/chart'
      target='_blank' label='See Docs' icon={<LinkIcon />}
      a11yTitle='See Chart Docs' />
  );

  return (
    <Demo explanation={explanation} code={code} anchor={anchorDoc} />
  );
};

export default Demo9;
