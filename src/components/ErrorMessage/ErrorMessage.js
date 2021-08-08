import './ErrorMessage.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  return (
    <section className='error-container'>
      <h2>{message}</h2>
    </section>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string
};
