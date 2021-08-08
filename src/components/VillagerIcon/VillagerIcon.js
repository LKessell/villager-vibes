import './VillagerIcon.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import circleX from '../../remove.png';

const VillagerIcon = ({ id, img, altText, type }) => {
  const removeBtn = type === 'wishlist' && <img src={circleX} alt='remove' className='remove-btn'/>

  return (
    <Link to={`/villagers/${id}`}>
      <img src={img} id={id} alt={altText} />
      {removeBtn}
    </Link>
  );
}

export default VillagerIcon;

VillagerIcon.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  altText: PropTypes.string,
  type: PropTypes.string,
}
