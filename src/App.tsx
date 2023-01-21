import './App.css';

import Experience from './Components/Experience/Experience';
import Profile from './Components/Profile/Profile';

import martin from './util/martin';

const App: React.FC = () => {
  const { profile, certificates, projects } = martin;

  return (
    <div className="main-container">
      <Profile profile={profile} />
      <Experience certificates={certificates} projects={projects} />
    </div>
  );
};

export default App;
