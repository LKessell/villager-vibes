import './IconContainer.css';
import PropTypes from 'prop-types';
import VillagerIcon from '../VillagerIcon/VillagerIcon';

const IconContainer = ({ villagers }) => {

  const currentVillagers = villagers.map(villager => {
    return <VillagerIcon key={villager.id} id={villager.id} img={villager.icon_uri} altText={villager.name['name-USen']}/>
  });

  return (
    <section className='icon-container'>
      {currentVillagers}
    </section>
  );
}

export default IconContainer;

IconContainer.propTypes = {
  villagers: PropTypes.array
};
