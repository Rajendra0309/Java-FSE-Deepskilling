import React from 'react';

const IndianPlayers = () => {
  const players = ['Virat', 'Rohit', 'Gill', 'Rahul', 'Pant', 'Hardik', 'Jadeja', 'Ashwin'];

  const oddPlayers = players.filter((_, index) => index % 2 !== 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 0);

  const T20players = ['Virat', 'Rohit', 'Pant'];
  const RanjiTrophyPlayers = ['Shaw', 'Iyer', 'Jurel'];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>All Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
