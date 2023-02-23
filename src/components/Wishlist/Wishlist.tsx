import './Wishlist.css';
import IconContainer from '../IconContainer/IconContainer';

// setWishlist
const Wishlist = ({
  wishlist,
  setWishlist,
}: {
  wishlist: Array<Villager>;
  setWishlist: React.Dispatch<React.SetStateAction<Array<Villager>>>;
}) => {
  return (
    <section className="wishlist box">
      <h2 className="wishlist-title">The Top 10 BEST Villagers:</h2>
      <IconContainer type="wishlist" villagers={wishlist} setWishlist={setWishlist} />
    </section>
  );
};

export default Wishlist;
