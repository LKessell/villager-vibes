import './Filter.css';

const Filter = () => {
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
