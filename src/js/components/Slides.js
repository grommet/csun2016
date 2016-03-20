import React, { Component } from 'react';

import Article from 'grommet/components/Article';

import { setDocumentTitle } from '../utils/presentation';

export default class Slides extends Component {
  constructor () {
    super();
    this._onFocusChange = this._onFocusChange.bind(this);
  }

  _onFocusChange (index) {
    const currentSlide = this.props.children[index];
    setDocumentTitle(currentSlide.props.title);
    window.location.hash = currentSlide.props.id;
  }

  render () {
    return (
      <Article direction='row' scrollStep={true} controls={true}
        onFocusChange={this._onFocusChange}
        a11yTitle={{next: 'Next Slide', previous: 'Previous Slide'}}>
        {this.props.children}
      </Article>
    );
  }
};
