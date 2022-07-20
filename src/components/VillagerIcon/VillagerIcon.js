import "./VillagerIcon.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VillagerIcon = ({ id, img, altText, type, setWishlist, villagers }) => {
  const removeVillager = (id) => {
    const splitID = id.split("-");
    const numID = parseInt(splitID[1]);
    const newWishlist = villagers.filter((villager) => villager.id !== numID);
    setWishlist(newWishlist);
  };

  return (
    <div className="icon-wrapper">
      <Link to={`/villagers/${id}`}>
        <img src={img} id={id} alt={altText} className="villager-icon" />
      </Link>
      {type === "wishlist" && (
        <button
          aria-label="Remove from wishlist"
          className="remove-btn"
          id={`rem-${id}`}
          onClick={(event) => removeVillager(event.target.id)}
        />
      )}
    </div>
  );
};

export default VillagerIcon;

VillagerIcon.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  altText: PropTypes.string,
  type: PropTypes.string,
  setWishlist: PropTypes.func,
  villagers: PropTypes.array,
};
