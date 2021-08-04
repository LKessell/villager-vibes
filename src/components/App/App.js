import { useState, useEffect } from 'react';
import './App.css';
import fetchVillagers from '../../apiCalls';
import IconContainer from '../IconContainer/IconContainer';

const App = () => {
  const [allVillagers, setAllVillagers] = useState([]);

  useEffect(() => {
    fetchVillagers()
      .then(data => setAllVillagers(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Villager Vibes</h1>
      </header>
      <main>
        <IconContainer allVillagers={allVillagers} />
      </main>
    </div>
  );
}

export default App;
