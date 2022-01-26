import Nav from 'components/Nav';
import Logo from 'components/Logo';

export default function Header() {
  return (
    <div className='container mx-auto border-b-2'>
      <Nav />
      <Logo />
    </div>
  );
}
