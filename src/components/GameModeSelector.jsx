import { Link } from 'react-router-dom';

function GameModeSelector() {
  const modes = ['all', 'regions', 'small-countries', 'famous-countries', 'old-countries'];

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Select Game Mode</h2>
      <ul className="space-y-3">
        {modes.map((mode) => (
          <li key={mode}>
            <Link
              to={`/game/${mode}`}
              className="block w-full text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              {mode.replace('-', ' ').toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameModeSelector;