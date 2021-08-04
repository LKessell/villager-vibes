import './VillagerDetails.css';

const VillagerDetails = ({ data }) => {
  return (
    <section className='villager-details'>
      <h3>{data.name['name-USen']}</h3>
    </section>
  );
}

export default VillagerDetails;
