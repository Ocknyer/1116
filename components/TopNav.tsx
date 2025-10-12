import { END_TIME, METADATA_JSON } from '@/constant';
import Link from 'next/link';
import CountdownBar from './CountdownBar';

const TopNav = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-20 flex justify-center bg-primary z-20 p-2'>
      <Link href='/' className='flex flex-col items-center'>
        <p className='text-lg text-white'>{METADATA_JSON.title}</p>
        <p className='text-3xl font-bold text-white mt-1'>{METADATA_JSON.title}</p>
      </Link>
      <CountdownBar endTime={END_TIME} />
    </header>
  );
};

export default TopNav;
