// src/components/Map.js
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useContext, useState } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json';

function Map({ mode }) {
  const { updateProgress } = useContext(ProgressContext);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.NAME;
    setSelectedCountry(countryName);
    updateProgress(mode, countryName);
    // Add logic to check if the selected country is correct
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