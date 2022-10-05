import "./VillagerIcon.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VillagerIcon = ({ id, img, altText, type, setWishlist, villagers }) => {
  const [isLoading, setIsLoading] = useState(true);

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
        <img
          src={img}
          id={id}
          alt={altText}
          className="villager-icon"
          onLoad={() => setIsLoading(false)}
        />
        {type === "wishlist" && (
          <button
            aria-label="Remove from wishlist"
            className="remove-btn"
            id={`rem-${id}`}
            onClick={(e) => removeVillager(e)}
          />
        )}
        <span
          className="icon-placeholder"
          style={{ display: isLoading ? "inline-block" : "none" }}
        ></span>
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
