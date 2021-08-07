import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import fetchVillagers from '../../apiCalls';
import NavBar from '../NavBar/NavBar';
import Filter from '../Filter/Filter';
import IconContainer from '../IconContainer/IconContainer';
import VillagerDetails from '../VillagerDetails/VillagerDetails';
import Wishlist from '../Wishlist/Wishlist';

const App = () => {
  const [allVillagers, setAllVillagers] = useState([]);
  const [displayedVillagers, setDisplayedVillagers] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchVillagers()
      .then(data => {
        setAllVillagers(data)
        setDisplayedVillagers(data)
      })
  }, []);

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
            return (<h2>That villager does not exist!</h2>)
          }

          return <VillagerDetails data={villager} setWishlist={setWishlist} wishlist={wishlist} />
        }} />
        <Route path='/wishlist'>
          <Wishlist wishlist={wishlist} />
        </Route>
        <Route path='/'>
          <Filter displayedVillagers={displayedVillagers} setDisplayedVillagers={setDisplayedVillagers} />
          <IconContainer villagers={displayedVillagers} />
        </Route>
      </Switch>
      </main>
    </div>
  );
}

export default App;
