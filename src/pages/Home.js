import Posts from 'components/Posts';
import Sidebar from 'components/Sidebar';

export default function Home() {
  return (
    <div className='flex flex-col-reverse md:flex-row'>
      <div className='flex-1'>
        <Posts />
      </div>
      <div className='md:basis-72 md:shrink-0'>
        <Sidebar />
      </div>
    </div>
  );
}
