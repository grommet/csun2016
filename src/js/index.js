import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'grommet/components/App';

import CSUNHeader from './components/CSUNHeader';
import CSUNSlides from './components/CSUNSlides';

const Main = () => {
  return (
    <App centered={false}>
      <CSUNHeader />
      <CSUNSlides />
    </App>
  );
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
