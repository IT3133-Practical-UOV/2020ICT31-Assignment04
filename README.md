# 2020ICT31-Assignment04

## Animal Matching Game

The **Animal Matching Game** is an interactive React application where players match a displayed animal name with the correct animal image from a grid. This game helps improve visual recognition and decision-making skills in a fun and engaging way.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)  

---

## Features
- Displays a random animal name for the player to match.
- Interactive grid of animal cards with images.
- Dynamic result display (`WIN` or `LOSE`) based on the player's choice.
- Refreshes with a new random animal after 1000ms.

---

## Technologies Used
- **React**: For building the UI components.
- **CSS**: For styling the application.
- **JavaScript**: For game logic and interactivity.

---

## Project Structure
The project is organized into reusable React components:
1. **Game**: The main component that handles state management and game logic.
2. **GameHeader**: Displays the title of the game.
3. **ResultDisplay**: Shows whether the player has won or lost.
4. **AnimalGrid**: Renders the grid of animal images and handles user interactions.

---

## Installation

### Prerequisites
- Node.js installed on your computer.
- npm (Node Package Manager) or yarn.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/IT3133-Practical-UOV/2020ICT31-Assignment04.git
   ```
2. Navigate to the project directory:
   ```bash
   cd animal-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```


## Usage
1. Open the application in a browser.
2. A random animal name is displayed at the top.
3. Select the matching animal image from the grid.
4. The result (`WIN` or `LOSE`) is displayed based on your choice.
5. After every correct selection of the animal 1000ms take to load a new animal name. within that time can see the result. 

---

## Folder Structure
```
src/
├── assets/
│   ├── img/                   # Images of animals.
│   └── css/
│       └── style.css          # Styling for the application.
├── data/
│   │   └── AnimalsDb.js       # Array of animal data
├── components/
│   ├── Game.js                # Main game component.
│   ├── GameHeader.js          # Displays game title.
│   ├── ResultDisplay.js       # Displays result (WIN/LOSE).
│   └── AnimalGrid.js          # Grid of animal images.
└── app.js                     # Main component file
└── index.js                   # Application entry point.
```


