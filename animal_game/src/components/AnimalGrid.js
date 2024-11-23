import React from "react";

export default function AnimalGrid({ animals, onAnimalClick }) {
  return (
    <div className="column grid-column">
      <div className="animal-grid-header"><h2>Select the Animal</h2></div>
      <div className="animal-grid">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="card"
            onClick={() => onAnimalClick(animal)}
          >
            <img
              src={require(`../assets/img/${animal.img}`)}
              alt={animal.name}
              className="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
