import React from 'react';

import Box from 'grommet/components/Box';

import Heading from 'grommet-presentation/components/Heading';
import Presenter from 'grommet-presentation/components/Presenter';

const Home = () => {
  return (
    <Box align='center'>
      <Box>
        <Heading strong={true} huge={true}>Grommet</Heading>
      </Box>
      <Box pad={{vertical: 'small'}}>
        <Heading align='center'>
          An accessible UX framework for enterprise apps
        </Heading>
      </Box>
      <Box pad={{vertical: 'small'}} direction='row' justify='center'
        fill={true} flush={false}>
        <Presenter avatar='https://s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=120'
          name='Alan Souza' detail='Hewlett Packard Enterprise'
          twitterTag='alansouzati' githubTag='alansouzati' />

        <Presenter avatar='https://s.gravatar.com/avatar/6b3717afecfb0d655c877cb737d1ee27?s=120'
          name='Sam Ogami' detail='HP Inc.'
          twitterTag='sogami' githubTag='samogami' />
      </Box>
    </Box>
  );
};

export default Home;
