import { useState } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ allVillagers, setDisplayedVillagers }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const allFilters = allVillagers.reduce((filters, villager) => {
    if (!filters.includes(villager.species)) {
      filters.push(villager.species);
    }
    return filters.sort();
  }, []);

  const speciesFilters = allFilters.map(filter => {
    return (
      <label key={filter}>
        <input
          type='radio'
          className='radio-bubble'
          id={`${filter}`}
          checked={selectedFilter === filter}
          onChange={event => filterVillagers(event)}
        />
        {`${filter}`}
      </label>
    );
  })

  const filterVillagers = event => {
    const filteredResults = allVillagers.filter(villager => villager.species === event.target.id || event.target.id === 'all');

    setSelectedFilter(event.target.id);
    setDisplayedVillagers(filteredResults);
  }

  return (
    <section className='filter-container'>
      <h2 className='filter-title'>I'm vibing with...</h2>
      <label>
        <input
          type='radio'
          className='radio-bubble'
          id='all'
          checked={selectedFilter === 'all'}
          onChange={event => filterVillagers(event)}
        />
      All Villagers
      </label>
      {speciesFilters}
    </section>
  );
}

export default Filter;

Filter.propTypes = {
  displayedVillagers: PropTypes.array,
  setDisplayedVillagers: PropTypes.func
}
