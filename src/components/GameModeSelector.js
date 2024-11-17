// src/components/GameModeSelector.js
import { Link } from 'react-router-dom';

function GameModeSelector() {
  const modes = ['all', 'regions', 'small-countries', 'famous-countries', 'old-countries'];

  return (
    <div className="game-mode-selector">
      <h2>Select Game Mode</h2>
      <ul>
        {modes.map((mode) => (
          <li key={mode}>
            <Link to={`/game/${mode}`}>{mode.replace('-', ' ').toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameModeSelector;