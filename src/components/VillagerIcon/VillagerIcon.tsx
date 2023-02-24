import './VillagerIcon.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const VillagerIcon = ({
  id,
  img,
  altText,
  type,
  setWishlist,
  villagers,
}: {
  id: number;
  img: string;
  altText: string;
  type: string;
  setWishlist: React.Dispatch<React.SetStateAction<Array<Villager>>>;
  villagers: Array<Villager>;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const removeVillager = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const splitID = (e.target as HTMLButtonElement).id.split('-');
    const numID = parseInt(splitID[1]);
    const newWishlist = villagers.filter((villager) => villager.id !== numID);

    setWishlist(newWishlist);
  };

  return (
    <Link to={`/villagers/${id}`} className="icon-link">
      <div>
        <img
          src={img}
          id={`${id}`}
          alt={altText}
          className="villager-icon"
          onLoad={() => setIsLoading(false)}
          style={{ opacity: isLoading ? 0 : 1 }}
        />
        {type === 'wishlist' && (
          <button
            aria-label="Remove from wishlist"
            className="remove-btn"
            id={`rem-${id}`}
            onClick={(e) => removeVillager(e)}
          />
        )}
        <span className="icon-placeholder" style={{ display: isLoading ? 'inline-block' : 'none' }}></span>
      </div>
    </Link>
  );
};

export default VillagerIcon;
