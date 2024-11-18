
import React, { useContext, useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { ProgressContext } from '../contexts/ProgressContext';

const geoUrl = '/countries.json'; 

function Map({ mode, targetCountry, onCorrect }) {
  const { updateProgress } = useContext(ProgressContext);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.ADMIN || geo.properties.NAME; 
    setSelectedCountry(countryName);
    updateProgress(mode, countryName);

    if (countryName === targetCountry) {
      setFeedback('✅ Correct! Well done.');
      onCorrect();
    } else {
      setFeedback(`❌ Incorrect. You selected ${countryName}. Try again.`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-full">
        <ComposableMap
          projectionConfig={{
            scale: 200,
          }}
          width={800}
          height={400}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo)}
                  className="cursor-pointer"
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                      transition: 'fill 0.2s',
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                      transition: 'fill 0.2s',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                      transition: 'fill 0.2s',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="mt-4 w-full max-w-2xl">
        {selectedCountry && (
          <div className="bg-gray-100 p-3 rounded shadow">
            <p className="text-center">
              You selected: <strong className="text-blue-600">{selectedCountry}</strong>
            </p>
          </div>
        )}
        {feedback && (
          <div className="mt-2 bg-white p-3 rounded shadow">
            <p className="text-center text-lg">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;