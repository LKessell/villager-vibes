import './VillagerIcon.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import circleX from '../../remove.png';

const VillagerIcon = ({ id, img, altText, type, setWishlist }) => {
  const removeBtn = type === 'wishlist' && <img src={circleX} alt='remove' className='remove-btn' id={`rem-${id}`} onClick={(event) => removeVillager(event.target.id)}/>

  const removeVillager = (id) => {
    const splitID = id.split('-');
    console.log(splitID);
  };

  return (
    <>
    <Link to={`/villagers/${id}`}>
      <img src={img} id={id} alt={altText} />
    </Link>
    {removeBtn}
    </>
  );
}

export default VillagerIcon;

VillagerIcon.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  altText: PropTypes.string,
  type: PropTypes.string,
  setWishlist: PropTypes.func
}
