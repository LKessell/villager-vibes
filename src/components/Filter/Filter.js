import { useState } from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ displayedVillagers, setDisplayedVillagers }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  return (
    <section className='filter-container'>
      <label>
        <input type='radio' className='radio-bubble' id='all' checked={selectedFilter === 'all'} />
      All Villagers
      </label>
      <label>
        <input type='radio' className='radio-bubble' id='Bird' checked={selectedFilter === 'Bird'} />
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
