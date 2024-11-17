// src/pages/Game.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import countriesData from '../data/countries'; // Assume you have a countries data file

function Game() {
  const { mode } = useParams();
  const [targetCountry, setTargetCountry] = useState('');

  useEffect(() => {
    const filteredCountries = getFilteredCountries(mode);
    const randomCountry = filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
    setTargetCountry(randomCountry);
  }, [mode]);

  const getFilteredCountries = (mode) => {
    switch (mode) {
      case 'regions':
        return countriesData.regions;
      case 'small-countries':
        return countriesData.smallCountries;
      case 'famous-countries':
        return countriesData.famousCountries;
      case 'old-countries':
        return countriesData.oldCountries;
      default:
        return countriesData.all;
    }
  };

  const handleCorrectSelection = () => {
    const filteredCountries = getFilteredCountries(mode);
    const randomCountry = filteredCountries[Math.floor(Math.random() * filteredCountries.length)];
    setTargetCountry(randomCountry);
  };

  return (
    <div className="game-page">
      <h2>{mode.replace('-', ' ').toUpperCase()} Mode</h2>
      <p>Find and click on: <strong>{targetCountry}</strong></p>
      <Map
        mode={mode}
        targetCountry={targetCountry}
        onCorrect={handleCorrectSelection}
      />
    </div>
  );
}

export default Game;