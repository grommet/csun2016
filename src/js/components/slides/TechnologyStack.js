import React from 'react';

import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';

const TechnologyStack = () => {
  return (
    <Tiles size="small" fill={true} flush={false}>
      <Tile>
        <a href="http://www.w3.org/TR/html5/" target="_blank">
          <img src="img/HTML5.png" alt="HTML5" />
        </a>
      </Tile>
      <Tile>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
          target="_blank">
          <img src="img/CSS3.png" alt="CSS3" />
        </a>
      </Tile>
      <Tile>
        <a href="https://nodejs.org" target="_blank">
          <img src="img/NodeJS.png" alt="NodeJS" />
        </a>
      </Tile>
      <Tile>
        <a href="https://github.com/inuitcss" target="_blank">
          <img src="img/InuitCSS.png" alt="InuitCSS" />
        </a>
      </Tile>
      <Tile>
        <a href="http://facebook.github.io/react/" target="_blank">
          <img src="img/reactjs.png" alt="ReactJS" />
        </a>
      </Tile>
      <Tile>
        <a href="https://babeljs.io/" target="_blank">
          <img src="img/babeljs.png" alt="BabelJS" />
        </a>
      </Tile>
      <Tile>
        <a href="http://gulpjs.com" target="_blank">
          <img src="img/gulp.png" alt="Gulp" />
        </a>
      </Tile>
      <Tile>
        <a href="http://webpack.github.io" target="_blank">
          <img src="img/webpack.png" alt="Webpack" />
        </a>
      </Tile>
    </Tiles>
  );
};

export default TechnologyStack;
