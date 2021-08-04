import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import fetchVillagers from '../../apiCalls';
import IconContainer from '../IconContainer/IconContainer';
import VillagerDetails from '../VillagerDetails/VillagerDetails';

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
      <Switch>
        <Route path='/villagers/:id' render={({ match }) => {
          const villager = allVillagers.find(villager => villager.id === parseInt(match.params.id));

          if (!villager) {
            return (<h2>That villager does not exist!</h2>)
          }

          return <VillagerDetails data={villager} />
        }} />
        <Route path='/'>
          <IconContainer allVillagers={allVillagers} />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
