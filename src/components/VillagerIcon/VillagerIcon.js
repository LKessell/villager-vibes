import './VillagerIcon.css';
import { Link } from 'react-router-dom';

const VillagerIcon = ({ id, img, altText }) => {
  return (
    <Link to={`/villagers/${id}`}>
      <img src={img} id={id} alt={altText} />
    </Link>
  );
}

export default VillagerIcon;
