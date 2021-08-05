import './VillagerDetails.css';
import { Link } from 'react-router-dom';

const VillagerDetails = ({ data, wishlist, setWishlist }) => {
  const nameStyle = {
    backgroundColor: data['bubble-color'],
    color: data['text-color']
  }

  return (
    <section className='villager-details'>
      <img src={`https://acnhapi.com/v1/images/villagers/${data.id}`} alt='' className='detail-photo'/>
      <h3 className='details-name' style={nameStyle}>{data.name['name-USen']}</h3>
      <dl>
        <div>
          <dt>Species</dt>
          <dd>{data.species}</dd>
        </div>
        <div>
          <dt>Birthday</dt>
          <dd>{data['birthday-string']}</dd>
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
      <div className='details-buttons'>
        <Link to='/' className='details-back-btn'>
          Ew, NO!
        </Link>
        <Link to='/wishlist' className='add-wishlist-btn' id={data.id}>
          They're my FAVE!
        </Link>
      </div>
    </section>
  );
}

export default VillagerDetails;
