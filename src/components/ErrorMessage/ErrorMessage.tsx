import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <section className="error-container box">
      <h2>{message}</h2>
    </section>
  );
};

export default ErrorMessage;
