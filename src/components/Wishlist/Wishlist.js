import './Wishlist.css';
import IconContainer from '../IconContainer/IconContainer';

const Wishlist = ({ wishlist }) => {
  return (
    <section className='wishlist'>
      <h2 className='wishlist-title'>The Top 10 BEST Villagers:</h2>
      <IconContainer allVillagers={wishlist} />
    </section>
  );
}

export default Wishlist;
