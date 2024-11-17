// src/components/Map.jsx
import React, { useContext, useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { ProgressContext } from '../contexts/ProgressContext';

const geoUrl =
  '/countries.json';

function Map({ mode, targetCountry, onCorrect }) {
  const { updateProgress } = useContext(ProgressContext);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleCountryClick = (geo) => {
    console.log(geo.properties); // Add this line
    const countryName = geo.properties.ADMIN; // or use the correct property
    setSelectedCountry(countryName);
    updateProgress(mode, countryName);
  
    if (countryName === targetCountry) {
      setFeedback('Correct! Well done.');
      onCorrect();
    } else {
      setFeedback(`Incorrect. You selected ${countryName}. Try again.`);
    }
  };

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo)}
                style={{
                  default: { fill: '#D6D6DA', outline: 'none' },
                  hover: { fill: '#F53', outline: 'none' },
                  pressed: { fill: '#E42', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {selectedCountry && <p>You selected: {selectedCountry}</p>}
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default Map;