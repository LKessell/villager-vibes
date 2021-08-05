import './IconContainer.css';
import VillagerIcon from '../VillagerIcon/VillagerIcon';

const IconContainer = ({ allVillagers }) => {

  const villagers = allVillagers.map(villager => {
    return <VillagerIcon key={villager.id} id={villager.id} img={villager.icon_uri} altText={villager.name['name-USen']}/>
  });

  return (
    <section className='icon-container'>
      {villagers}
    </section>
  );
}

export default IconContainer;
