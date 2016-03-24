import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import GrommetLogo from 'grommet/components/icons/Grommet';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import LinkIcon from 'grommet/components/icons/base/Link';

const ThankYou = () => {
  return (
    <Box align='center' justify='center' full='horizontal'>
      <Box pad='large'>
        <GrommetLogo size='large' />
      </Box>
      <Heading align='center' tag='h2'>
        Wait... before you leave let's open-source something!
      </Heading>
      <Box align='center'>
        <Box>
          <Anchor href='https://github.com/grommet/grommet-presentation'
            target="_blank" label='grommet-presentation'
            icon={<GithubIcon a11yTitle='grommet-presentation github' />} />
        </Box>
        <Box>
          <Anchor href='http://codepen.io/alansouzati/pen/xVdeKa?editors=0010'
            target="_blank" label='codepen'
            icon={<LinkIcon a11yTitle='grommet-presentation codepen' />} />
        </Box>
      </Box>
    </Box>
  );
};

export default ThankYou;
