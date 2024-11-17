// src/components/Map.jsx
import React, { useContext, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { ProgressContext } from '../contexts/ProgressContext';

const geoUrl =
  '/world-countries-sans-antarctica.json';

function Map({ mode }) {
  const { updateProgress } = useContext(ProgressContext);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.NAME;
    setSelectedCountry(countryName);
    updateProgress(mode, countryName);
    // Add logic to prompt the user to spot the country
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
    </div>
  );
}

export default Map;