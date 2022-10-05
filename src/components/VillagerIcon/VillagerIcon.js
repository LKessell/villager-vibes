import "./VillagerIcon.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VillagerIcon = ({ id, img, altText, type, setWishlist, villagers }) => {
  const removeVillager = (e) => {
    e.preventDefault();

    const splitID = e.target.id.split("-");
    const numID = parseInt(splitID[1]);
    const newWishlist = villagers.filter((villager) => villager.id !== numID);

    setWishlist(newWishlist);
  };

  return (
    <Link to={`/villagers/${id}`} className="icon-link">
      <div>
        <img src={img} id={id} alt={altText} className="villager-icon" />
        {type === "wishlist" && (
          <button
            aria-label="Remove from wishlist"
            className="remove-btn"
            id={`rem-${id}`}
            onClick={(e) => removeVillager(e)}
          />
        )}
        <span className="icon-placeholder"></span>
      </div>
    </Link>
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
