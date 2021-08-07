import { useState } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ allVillagers, displayedVillagers, setDisplayedVillagers }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterVillagers = event => {
    const filteredResults = allVillagers.filter(villager => villager.species === event.target.id || event.target.id === 'all');

    setSelectedFilter(event.target.id);
    setDisplayedVillagers(filteredResults);
  }

  return (
    <section className='filter-container'>
      <label>
        <input type='radio' className='radio-bubble' id='all' checked={selectedFilter === 'all'} onChange={event => filterVillagers(event)} />
      All Villagers
      </label>
      <label>
        <input type='radio' className='radio-bubble' id='Bird' checked={selectedFilter === 'Bird'} onChange={event => filterVillagers(event)} />
      Bird
      </label>
    </section>
  );
}

export default Filter;

Filter.propTypes = {
  displayedVillagers: PropTypes.array,
  setDisplayedVillagers: PropTypes.func
}
