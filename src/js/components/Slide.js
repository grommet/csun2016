import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';

export default class Slide extends Component {
  render () {
    const { children, id, title } = this.props;
    let titleNode;
    if (title) {
      titleNode = (
        <Heading strong={true}>{title}</Heading>
      );
    }

    let anchorNode;
    if (id) {
      anchorNode = (
        <a id={id} tabIndex="-1" aria-hidden="true" />
      );
    }

    return (
      <Section full={true} pad='large' onFocus={this._onSlideFocus}>
        {anchorNode}
        <Box align='start' {...this.props}
          className={`${this.props.className || ''} slide flex`}
          pad={{vertical: 'large'}}>
          {titleNode}
          <Box pad={{vertical: 'large'}} full='horizontal'>
            {children}
          </Box>
        </Box>
      </Section>
    );
  }
};

Slide.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};
