'use client';

import { END_TIME } from '@/constant';
import useCountdown from '@/hooks/useCountdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Spinner from './Common/Spinner';

const BottomNav = () => {
  const pathname = usePathname();
  const { remainingTime, isLoading } = useCountdown(END_TIME);

  return (
    <nav className='fixed bottom-0 w-full bg-slate-50 border-t border-gray-200 z-20'>
      <div className='flex pt-4 px-4 pb-6 max-w-[480px] mx-auto'>
        {isLoading ? (
          <div className='w-full h-12 flex items-center justify-center'>
            <Spinner color='#e82726' />
          </div>
        ) : remainingTime === '종료된 공연입니다.' ? (
          <p className='w-full h-12 font-semibold flex items-center justify-center text-gray-700 bg-gray-300 rounded-lg'>
            종료된 공연입니다.
          </p>
        ) : (
          <Link
            href={pathname === '/reservation' || pathname === '/complete' ? '/' : '/reservation'}
            className={
              `px-4 flex items-center justify-center rounded-lg transition-colors h-12 font-semibold w-full text-base tablet:text-lg` +
              ' ' +
              (pathname === '/reservation' || pathname === '/complete'
                ? 'bg-slate-50 text-gray-700 border border-gray-300'
                : 'bg-primary hover:bg-primary/80 text-white')
            }
          >
            {pathname === '/reservation' || pathname === '/complete' ? '메인으로' : '예매하기'}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default BottomNav;
