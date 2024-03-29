import { useState, useEffect } from 'react';
import './Filter.css';

const Filter = ({
  allVillagers,
  setDisplayedVillagers,
}: {
  allVillagers: Array<Villager>;
  setDisplayedVillagers: React.Dispatch<React.SetStateAction<Array<Villager>>>;
}) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

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

  const filterButtons = allFilters.map((filter) => {
    return (
      <li key={filter}>
        <label className="radio-bubble">
          <input
            type="radio"
            id={`${filter}`}
            checked={selectedFilter === filter}
            onChange={(event) => setSelectedFilter(event.target.id)}
          />
          {filter === 'All' ? 'All Villagers' : `${filter}`}
        </label>
      </li>
    );
  });

  const selectOptions = allFilters.map((filter) => {
    return (
      <option key={`option${filter}`} value={filter}>
        {filter === 'All' ? 'All Villagers' : `${filter}`}
      </option>
    );
  });

  useEffect(() => {
    const filteredResults = allVillagers.filter(
      (villager) => villager.species === selectedFilter || selectedFilter === 'All'
    );
    setDisplayedVillagers(filteredResults);
  }, [allVillagers, selectedFilter, setDisplayedVillagers]);

  return (
    <section className="filter-container box">
      <h2 className="filter-title">I'm vibing with...</h2>
      <ul className="bubble-filter">{filterButtons}</ul>
      <select
        className="mobile-filter"
        onChange={(event) => setSelectedFilter(event.target.value)}
        value={selectedFilter}
      >
        {selectOptions}
      </select>
    </section>
  );
};

export default Filter;
