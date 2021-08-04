import './IconContainer.css';
import VillagerIcon from '../VillagerIcon/VillagerIcon';

const IconContainer = ({ allVillagers }) => {

  const villagers = allVillagers.map(villager => {
    return <VillagerIcon key={villager.id} id={villager.id} img={villager.icon_uri}/>
  });

  return (
    <section className='icon-container'>
      <h2>Villager icons will be here</h2>
      {villagers}
    </section>
  );
}

export default IconContainer;
