import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import fetchVillagers from '../../apiCalls';
import NavBar from '../NavBar/NavBar';
import Filter from '../Filter/Filter';
import IconContainer from '../IconContainer/IconContainer';
import VillagerDetails from '../VillagerDetails/VillagerDetails';
import Wishlist from '../Wishlist/Wishlist';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const App = () => {
  const [allVillagers, setAllVillagers] = useState([]);
  const [displayedVillagers, setDisplayedVillagers] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchVillagers()
      .then(data => {
        setAllVillagers(data);
        setDisplayedVillagers(data);
      })
      .catch(error => {
        setErrorMsg('We are experiencing server issues, please try again later!');
      })
  }, []);

  const mainError = errorMsg && <ErrorMessage message={errorMsg} />;

  const mainSuccess = !errorMsg && <>
    <Filter setDisplayedVillagers={setDisplayedVillagers} allVillagers={allVillagers} />
    <IconContainer type='main' villagers={displayedVillagers} />
  </>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Villager Vibes</h1>
        <NavBar />
      </header>
      <main>
      <Switch>
        <Route path='/villagers/:id' render={({ match }) => {
          const villager = allVillagers.find(villager => villager.id === parseInt(match.params.id));

          if (!villager) {
            return <ErrorMessage message='That villager does not exist!' />
          }

          return <VillagerDetails data={villager} setWishlist={setWishlist} wishlist={wishlist} />
        }} />
        <Route path='/wishlist'>
          <Wishlist wishlist={wishlist} />
        </Route>
        <Route exact path='/'>
          {mainError}
          {mainSuccess}
        </Route>
        <Route>
          <ErrorMessage message='That villager does not exist!' />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
