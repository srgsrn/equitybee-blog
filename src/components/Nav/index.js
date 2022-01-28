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

  return (
    <nav className='flex flex-row'>
      {navConfig.map((i) => (
        <NavLink
          key={i.url.toLowerCase()}
          to={i.url}
          className={({ isActive }) =>
            isActive ? ' text-orange-600 px-4' : 'px-4'
          }
        >
          {i.text}
        </NavLink>
      ))}
    </nav>
  );
}
