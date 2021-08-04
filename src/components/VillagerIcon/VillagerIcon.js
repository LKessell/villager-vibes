import './VillagerIcon.css';

const VillagerIcon = ({ id, img, altText }) => {
  return (
    <img src={img} id={id} alt={altText} />
  );
}

export default VillagerIcon;
