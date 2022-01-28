import { NavLink } from 'react-router-dom';

export default function Nav() {
  const navConfig = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'About us',
      url: 'about-us',
    },
    {
      text: 'Faq',
      url: 'faq',
    },
  ];

  const checkIsActive = ({ isActive }) =>
    isActive
      ? 'text-green-500 border-b border-green-500 font-thin px-4 py-2 transition-all'
      : 'border-b-transparent font-thin px-4 py-2 transition-all hover:text-green-500';

  return (
    <nav className='flex flex-row'>
      {navConfig.map((i) => (
        <NavLink
          className={(navData) => checkIsActive(navData)}
          key={i.url.toLowerCase()}
          to={i.url}
        >
          {i.text}
        </NavLink>
      ))}
    </nav>
  );
}
