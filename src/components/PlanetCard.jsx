import PropTypes from 'prop-types';
import React from 'react';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid="planet-card" className="planetcard">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
