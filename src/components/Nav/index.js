import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { className } = props;

  return (
    <nav className={className}>
      <Link to='/'>Home</Link>
      <Link to='about-us'>About us</Link>
      <Link to='faq'>Faq</Link>
    </nav>
  );
}

Nav.propTypes = {
  className: PropTypes.string,
};

Nav.defaultProps = {
  className: '',
};
