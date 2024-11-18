
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import countriesData from '../data/countries'; 


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
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Map Learning Game</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col lg:flex-row">
        <div className="lg:w-1/4 mb-6 lg:mb-0">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              {mode.replace('-', ' ').toUpperCase()} Mode
            </h2>
            <p className="text-lg">
              Find and click on: <strong className="text-blue-600">{targetCountry}</strong>
            </p>
          </div>
        </div>
        <div className="lg:w-3/4 h-full">
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <Map
              mode={mode}
              targetCountry={targetCountry}
              onCorrect={handleCorrectSelection}
            />
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} Map Learning Game
        </div>
      </footer>
    </div>
  );
}

export default Game;