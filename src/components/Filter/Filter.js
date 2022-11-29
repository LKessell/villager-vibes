import { useState, useEffect } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ allVillagers, setDisplayedVillagers }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const allFilters = allVillagers
    .reduce(
      (filters, villager) => {
        if (!filters.includes(villager.species)) {
          filters.push(villager.species);
        }
        return filters;
      },
      ['All']
    )
    .sort();

  const speciesFilters = allFilters.map((filter) => {
    return (
      <label key={filter}>
        <input type="radio" className="radio-bubble" id={`${filter}`} checked={selectedFilter === filter} onChange={(event) => setSelectedFilter(event.target.id)} />
        {`${filter}`}
      </label>
    );
  });

  useEffect(() => {
    const filteredResults = allVillagers.filter((villager) => villager.species === selectedFilter || selectedFilter === 'all');
    setDisplayedVillagers(filteredResults);
  }, [allVillagers, selectedFilter, setDisplayedVillagers]);

  return (
    <section className="filter-container box">
      <h2 className="filter-title">I'm vibing with...</h2>
      <label>
        <input type="radio" className="radio-bubble" id="all" checked={selectedFilter === 'all'} onChange={(event) => setSelectedFilter(event.target.id)} />
        All Villagers
      </label>
      {speciesFilters}
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  displayedVillagers: PropTypes.array,
  setDisplayedVillagers: PropTypes.func,
};
