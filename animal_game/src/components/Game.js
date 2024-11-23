import React, { useState, useEffect } from "react";
import AnimalGrid from "./AnimalGrid";
import GameHeader from "./GameHeader";
import ResultDisplay from "./ResultDisplay";
import animals from "../data/AnimalsDb";
import "../assets/css/style.css";

export default function Game() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [gameResult, setGameResult] = useState("");

  useEffect(() => {
    selectRandomAnimal();
  }, []);

  const selectRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setSelectedAnimal(animals[randomIndex]);
    setGameResult("");
  };

  const handleAnimalSelection = (animal) => {
    if (animal.name.toLowerCase() === selectedAnimal.name.toLowerCase()) {
      setGameResult("WIN");
    } else {
      setGameResult("LOSE");
    }
  };

  return (
    <div className="game-wrapper">
      <GameHeader title="ANIMAL MATCHING GAME" />
      <div className="game-container">
        <ResultDisplay result={gameResult} />
        <div className="column name-column">
          <div className="animal-grid-header"><h2>Animal Name</h2></div>
          {selectedAnimal ? selectedAnimal.name.toUpperCase() : "Loading..."}
        </div>
        <AnimalGrid animals={animals} onAnimalClick={handleAnimalSelection} />
      </div>
    </div>
  );
}
