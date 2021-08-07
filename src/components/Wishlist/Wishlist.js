import './Wishlist.css';
import IconContainer from '../IconContainer/IconContainer';
import PropTypes from 'prop-types';

const Wishlist = ({ wishlist }) => {
  return (
    <section className='wishlist'>
      <h2 className='wishlist-title'>The Top 10 BEST Villagers:</h2>
      <IconContainer villagers={wishlist} />
    </section>
  );
}

export default Wishlist;

Wishlist.propTypes = {
  wishlist: PropTypes.array
}
