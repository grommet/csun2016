import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';

const Presenter = (props) => {
  const { avatar, detail, name, twitterTag, githubTag } = props;
  return (
    <Box align='center' pad='medium'>
      <Box pad='small'>
        <img className='gravatar' src={avatar} title={`${name} Avatar`} />
      </Box>
      <Heading tag="h2">
        {name}
      </Heading>
      <Heading tag="h3">
        {detail}
      </Heading>
      <Box direction='row' responsive={false}>
        <Anchor href={`https://twitter.com/${twitterTag}`} target="_blank"
          icon={<TwitterIcon a11yTitle={`${name} Twitter`}
          a11yTitleId={`${name}-twitter`} />} />
        <Anchor href={`https://github.com/${githubTag}`} target="_blank"
          icon={<GithubIcon a11yTitle={`${name} Github`}
          a11yTitleId={`${name}-github`} />} />
      </Box>
    </Box>
  );
};

export default Presenter;
