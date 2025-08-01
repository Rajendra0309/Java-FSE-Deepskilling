import React from 'react';

function App() {
  const office = {
    name: 'Downtown Co-Working',
    rent: 75000,
    address: '12th Main Street, City Center',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80'
  };

  const officeList = [
    { name: 'Central Hub', rent: 55000, address: 'MG Road', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
    { name: 'Tech Tower', rent: 80000, address: 'Silicon Valley', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
    { name: 'Urban Loft', rent: 60000, address: 'Indiranagar', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80' },
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* JSX heading element */}
      <h1>Office Space Rental Portal</h1>

      {/* Single office object */}
      <h2>{office.name}</h2>
      <img src={office.image} alt="office" />
      <p style={getRentStyle(office.rent)}>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>

      {/* Office list rendering */}
      <h2>Available Office Spaces</h2>
      {officeList.map((item, index) => (
        <div key={index} style={{ border: '1px solid gray', margin: '15px', padding: '10px', borderRadius: '10px' }}>
          <h3>{item.name}</h3>
          <img src={item.image} alt="office" />
          <p style={getRentStyle(item.rent)}>Rent: ₹{item.rent}</p>
          <p>Address: {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
