import PropTypes from 'prop-types';
import React from 'react';

function Title({ headline }) {
  return (
    <div className="title">
      <h2 className="title-name">{ headline }</h2>
    </div>
  );
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
