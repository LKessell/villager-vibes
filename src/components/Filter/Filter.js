import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ displayedVillagers, setDisplayedVillagers }) => {
  return (
    <section className='filter-container'>
      <label>
        <input type='radio' className='radio-bubble' id='all' checked={true} />
      All Villagers
      </label>
      <label>
        <input type='radio' className='radio-bubble' id='Bird' checked={false} />
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
