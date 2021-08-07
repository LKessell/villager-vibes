import './VillagerIcon.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const VillagerIcon = ({ id, img, altText }) => {
  return (
    <Link to={`/villagers/${id}`}>
      <img src={img} id={id} alt={altText} />
    </Link>
  );
}

export default VillagerIcon;

VillagerIcon.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  altText: PropTypes.string
}
