import React from 'react';

import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import GrommetLogo from 'grommet/components/icons/Grommet';
import Title from 'grommet/components/Title';

const CSUNHeader = () => {
  return (
    <Header large={true} float={true} fixed={true}
      pad={{horizontal: 'large', vertical: 'medium'}}
      justify="between" colorIndex='light-1'>
      <Title responsive={false}>
        <GrommetLogo />
        <Heading tag="h3">CSUN 2016</Heading>
      </Title>
    </Header>
  );
};

export default CSUNHeader;
