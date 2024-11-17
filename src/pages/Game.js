// src/pages/Game.js
import { useParams } from "react-router-dom";
import Map from "../components/Map";

function Game() {
  const { mode } = useParams();

  return (
    <div className="game-page">
      <h2>{mode.replace("-", " ").toUpperCase()} Mode</h2> <Map mode={mode} />
    </div>
  );
}

export default Game;
