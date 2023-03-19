import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <div className="missions-div">
        {missions.map((mission) => (
          <MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>
    </div>
  );
}

export default Missions;
