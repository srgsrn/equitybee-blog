import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='about-us'>About us</Link>
      <Link to='faq'>Faq</Link>
    </nav>
  );
}
