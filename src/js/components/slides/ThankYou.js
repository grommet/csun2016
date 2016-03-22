import React from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import GrommetLogo from 'grommet/components/icons/Grommet';

const ThankYou = () => {
  return (
    <Box align='center' justify='center' full='horizontal'>
      <Box pad='large'>
        <GrommetLogo size='large' />
      </Box>
      <Heading align='center' tag='h2'>
        Wait... before your leave let's open-source something!
      </Heading>
    </Box>
  );
};

export default ThankYou;
