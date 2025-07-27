import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohortList = [
    {
      name: 'React Bootcamp',
      status: 'ongoing',
      startDate: '2025-07-01',
      endDate: '2025-08-15',
    },
    {
      name: 'NodeJS Mastery',
      status: 'completed',
      startDate: '2025-05-01',
      endDate: '2025-06-15',
    },
  ];

  return (
    <div className="App">
      {cohortList.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
