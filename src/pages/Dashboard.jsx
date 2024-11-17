// src/pages/Dashboard.js
import { useContext } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';

function Dashboard() {
  const { progress } = useContext(ProgressContext);

  return (
    <div className="dashboard">
      <h2>Progress Dashboard</h2>
      {Object.keys(progress).map((mode) => (
        <div key={mode}>
          <h3>{mode.replace('-', ' ').toUpperCase()} Mode</h3>
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Recognized</th>
                <th>Played</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(progress[mode]).map((country) => (
                <tr key={country}>
                  <td>{country}</td>
                  <td>{progress[mode][country].recognized}</td>
                  <td>{progress[mode][country].played}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;