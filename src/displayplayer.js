// DisplayPlayer.js

import React from 'react';
import arrPlayers from './players'; // Importing the array of players from players.js

function DisplayPlayer({ playerId }) {
  // Find the player based on the playerId passed as a prop
  const player = arrPlayers.find((p) => p.id === playerId);

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div>
      <h2>{`${player.firstName} ${player.lastName}`}</h2>
      <p>
        Age: {player.age} | Club: {player.club} | Nationality: {player.nationality} | Trophies: {player.trophies}
      </p>
      <p>{player.bio}</p>
      <img src={player.img} alt={`${player.firstName} ${player.lastName}`} />
      {/* Add more details as needed */}
    </div>
  );
}

export default DisplayPlayer;
