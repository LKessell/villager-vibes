import './VillagerDetails.css';

const VillagerDetails = ({ data }) => {
  return (
    <section className='villager-details'>
      <img src={`https://acnhapi.com/v1/images/villagers/${data.id}`} alt=''/>
      <h3 className='details-name'>{data.name['name-USen']}</h3>
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
    </section>
  );
}

export default VillagerDetails;
