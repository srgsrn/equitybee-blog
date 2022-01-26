import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

export default function Logo() {
  return (
    <Link to='/'>
      <img src={logo} alt='Equity Bee Blog' />
    </Link>
  );
}
