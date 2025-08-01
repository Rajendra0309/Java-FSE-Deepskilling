import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 85 },
    { name: 'Gill', score: 60 },
    { name: 'Rahul', score: 45 },
    { name: 'Pant', score: 70 },
    { name: 'Hardik', score: 50 },
    { name: 'Jadeja', score: 76 },
    { name: 'Ashwin', score: 30 },
    { name: 'Bumrah', score: 55 },
    { name: 'Shami', score: 80 },
    { name: 'Kuldeep', score: 65 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
