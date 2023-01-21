import { useState } from 'react';

import './App.css';

import Experience from './Components/Experience/Experience';
import Profile from './Components/Profile/Profile';

import martin from './martin';
import { orange, teal, violet } from './colors';

const App: React.FC = () => {
  const { profile, certificates, projects } = martin;

  const [color, setColor] = useState(orange);

  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--primary', color);

  return (
    <div className="main-container">
      <Profile profile={profile} />
      <Experience certificates={certificates} projects={projects} />
    </div>
  );
};

export default App;
