'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const buttonData = [
  { id: 1, path: '/', title: '홈' },
  { id: 2, path: '/reservation', title: '예매하기' },
  { id: 3, path: '/setlist', title: '셋리스트' },
];

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className='fixed bottom-0 w-full bg-white border-t border-gray-200 z-20'>
      <div className='flex pt-4 px-4 pb-6 max-w-[480px] mx-auto'>
        {/* {buttonData.map((button, index) => {
          return (
            <div key={button.id} className='flex-1 flex relative'>
              {index > 0 && <div className='absolute left-0 h-[calc(100%-2rem)] top-4 w-[1px] bg-gray-500' />}
              <Link
                href={button.path}
                className={`w-full flex items-center justify-center py-4 ${
                  pathname === button.path ? 'text-white' : 'text-gray-500'
                }`}
              >
                {button.title}
              </Link>
            </div>
          );
        })} */}
        <Link
          href={pathname === '/reservation' ? '/' : '/reservation'}
          className='bg-primary text-white px-4 flex items-center justify-center rounded-lg hover:bg-primary/80 transition-colors h-12 font-semibold w-full text-base tablet:text-lg'
        >
          {pathname === '/reservation' ? '메인으로' : '예매하기'}
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
