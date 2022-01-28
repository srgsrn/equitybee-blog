import Logo from 'components/Logo';
import Search from 'components/Search';
import Nav from 'components/Nav';

export default function Header() {
  return (
    <div className='border-b px-4 pt-6'>
      <div className='xl:container xl:mx-auto'>
        <div className='flex flex-row justify-between mb-14'>
          <Logo />
          <Search />
        </div>

        <Nav className='qwe' />
      </div>
    </div>
  );
}
