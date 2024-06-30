import React from 'react';

// Define the data array containing information about individuals
const data = [
  {
    name: "Roger Federer",
    description: "Arguably the best Tennis player ",
    rating: 5
  },
  {
    name: "Rafael Nadal",
    description: "The king of clay",
    rating: 4
  },
  {
    name: "Jannik Sinner",
    description: "The rising phenom of the next generation",
    rating: 3
  }
];

// Define the Card component
const Card = ({ name, description, rating }) => {
  const circles = [];
  for (let i = 0; i < 5; i++) {
    circles.push(<div key={i} className={i < rating ? 'circle filled' : 'circle'}></div>);
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="rating">{circles}</div>
    </div>
  );
};

// Define the TopList component
const TopList = () => (
  <div className="top-list" style={{background: 'lightblue'}}>
    <h2>TOP LIST</h2>
    {/* Map over the data array and render a Card component for each item */}
    {data.map((item, index) => (
      <Card
        key={index}
        name={item.name}
        description={item.description}
        rating={item.rating}
      />
    ))}
  </div>
);

export default TopList;
