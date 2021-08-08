import './Wishlist.css';
import IconContainer from '../IconContainer/IconContainer';
import PropTypes from 'prop-types';

const Wishlist = ({ wishlist, setWishlist }) => {
  return (
    <section className='wishlist'>
      <h2 className='wishlist-title'>The Top 10 BEST Villagers:</h2>
      <IconContainer type='wishlist' villagers={wishlist} setWishlist={setWishlist} />
    </section>
  );
}

export default Wishlist;

Wishlist.propTypes = {
  wishlist: PropTypes.array,
  setWishlist: PropTypes.func
}
