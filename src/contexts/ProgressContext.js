// src/contexts/ProgressContext.js
import { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const storedProgress = localStorage.getItem('mapLearningProgress');
    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mapLearningProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (mode, country) => {
    setProgress((prev) => {
      const modeProgress = prev[mode] || {};
      const countryData = modeProgress[country] || { recognized: 0, played: 0 };
      return {
        ...prev,
        [mode]: {
          ...modeProgress,
          [country]: {
            recognized: countryData.recognized + 1,
            played: countryData.played + 1,
          },
        },
      };
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}