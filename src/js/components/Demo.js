import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import jsxToString from 'jsx-to-string';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';
import DOMUtils from 'grommet/utils/DOM';

import CodeIcon from 'grommet/components/icons/base/Code';

//hjjs configuration
import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('scss', scss);

function _highlightCode () {
  var nodes = document.querySelectorAll('pre code');
  for (var i = 0; i < nodes.length; i++) {
    hljs.highlightBlock(nodes[i]);
  }
}

export default class Demo extends Component {

  constructor () {
    super();

    this._toggleView = this._toggleView.bind(this);
    this._preventPropagation = this._preventPropagation.bind(this);

    this.state = {
      showCode: false
    };
  }

  componentDidMount () {
    _highlightCode();

    this._keys = {
      left: this._preventPropagation,
      right: this._preventPropagation
    };
    KeyboardAccelerators.startListeningToKeyboard(this, this._keys);
  }

  componentDidUpdate () {
    _highlightCode();
  }

  componentWillUnmount () {
    KeyboardAccelerators.stopListeningToKeyboard(this, this._keys);
  }

  _toggleView () {
    this.setState({showCode: !this.state.showCode});
  }

  _preventPropagation () {
    const parent = ReactDOM.findDOMNode(this.refs.container);
    console.log(parent, document.activeElement);
    if (DOMUtils.isDescendant(parent, document.activeElement)) {
      return true;
    }
  }

  render () {

    const { anchor, code, explanation, source } = this.props;

    let demoNode = code;
    let codeLabel = 'Show';
    if (this.state.showCode) {
      codeLabel = 'Hide';
      demoNode = (
        <Box pad={{horizontal: 'medium', vertical: 'medium'}}>
          <pre><code>
            {jsxToString(source || code)}
          </code></pre>
        </Box>
      );
    }

    let justify = 'end';
    if (anchor) {
      justify = 'between';
    }
    return (
      <Box full='horizontal'>
        <Paragraph size='large'>
          {explanation}
        </Paragraph>

        <Box ref='container'>
          <Box direction='row' responsive={false} justify={justify} align='center'>
            {anchor}
            <Button label={`${codeLabel} Code`} plain={true}
              icon={<CodeIcon />} onClick={this._toggleView}
              a11yTitle={`${codeLabel} Code`} />
          </Box>

          {demoNode}
        </Box>
      </Box>
    );
  }
};

Demo.propTypes = {
  anchor: PropTypes.node,
  explanation: PropTypes.string.isRequired,
  code: PropTypes.node.isRequired,
  source: PropTypes.node
};
