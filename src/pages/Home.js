// src/pages/Home.js
import { Link } from 'react-router-dom';
import GameModeSelector from '../components/GameModeSelector';

function Home() {
  return (
    <div className="container">
      <h1>Map Learning Game</h1>
      <GameModeSelector />
      <Link to="/dashboard">View Progress Dashboard</Link>
    </div>
  );
}

export default Home;