import './IconContainer.css';
import PropTypes from 'prop-types';
import VillagerIcon from '../VillagerIcon/VillagerIcon';

const IconContainer = ({ villagers }) => {

  const currentVillagers = villagers.map(villager => {
    return <VillagerIcon key={villager.id} id={villager.id} img={villager.icon_uri} altText={villager.name['name-USen']}/>
  });
  const loadingMsg = !villagers.length && <h2>Loading villagers...</h2>;

  return (
    <section className='icon-container'>
      {loadingMsg}
      {currentVillagers}
    </section>
  );
}

export default IconContainer;

IconContainer.propTypes = {
  villagers: PropTypes.array
};
