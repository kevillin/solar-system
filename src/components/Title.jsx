import React from 'react';
import PropTypes from 'prop-types';

function Title({ headline }) {
  return (
    <div>
      <h2>{ headline }</h2>
    </div>
  );
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
