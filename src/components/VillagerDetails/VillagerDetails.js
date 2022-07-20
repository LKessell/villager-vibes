import "./VillagerDetails.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const VillagerDetails = ({ data, wishlist, setWishlist }) => {
  const [currentVillager, setCurrentVillager] = useState({});
  const pronoun = data.gender === "Female" ? "She" : "He";
  const isWishlistFull = wishlist.length >= 10;

  const nameStyle = {
    backgroundColor: data["bubble-color"],
    color: data["text-color"],
  };

  useEffect(() => {
    if (data.id !== currentVillager.id) {
      setCurrentVillager(data);
    }
  }, [currentVillager, data]);

  const addToWishlist = () => {
    if (!wishlist.includes(currentVillager) && wishlist.length < 10) {
      setWishlist([currentVillager, ...wishlist]);
    }
  };

  return (
    <section className="villager-details box">
      <img
        src={`https://acnhapi.com/v1/images/villagers/${data.id}`}
        alt=""
        className="detail-photo"
      />
      <h3 className="details-name" style={nameStyle}>
        {data.name["name-USen"]}
      </h3>
      <dl>
        <div>
          <dt>Species</dt>
          <dd>{data.species}</dd>
        </div>
        <div>
          <dt>Birthday</dt>
          <dd>{data["birthday-string"]}</dd>
        </div>
        <div>
          <dt>Gender</dt>
          <dd>{data.gender}</dd>
        </div>
        <div>
          <dt>Hobby</dt>
          <dd>{data.hobby}</dd>
        </div>
        <div>
          <dt>Saying</dt>
          <dd>{data.saying}</dd>
        </div>
      </dl>
      <div className="details-buttons">
        <Link to="/" className="details-back-btn">
          Ew, NO!
        </Link>
        <Link
          to="/wishlist"
          className="add-wishlist-btn"
          id={data.id}
          onClick={addToWishlist}
        >
          {`${pronoun}'s my FAVE!`}
        </Link>
      </div>
      {isWishlistFull && <p>Your wishlist is full!</p>}
    </section>
  );
};

export default VillagerDetails;

VillagerDetails.propTypes = {
  data: PropTypes.object,
  wishlist: PropTypes.array,
  setWishlist: PropTypes.func,
};
