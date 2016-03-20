import React, { PropTypes } from 'react';

const Bullet = (props) => {
  const { children, item } = props;

  return (
    <li>{item}
      {children}
    </li>
  );
};

Bullet.propTypes = {
  item: PropTypes.string.isRequired
};

export default Bullet;
