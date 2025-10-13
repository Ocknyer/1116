import { METADATA_JSON } from '@/constant';
import { Map } from 'lucide-react';
import Link from 'next/link';
import NaverMap from './NaverMap';

const MapSection = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <section
      id='map_target'
      className='flex flex-col items-center justify-center text-center w-full gap-4 px-4 py-6 bg-white sm:rounded-lg sm:shadow-md'
    >
      <div className='flex flex-col gap-2 w-full items-start'>
        <div className='w-full flex items-center gap-2'>
          <Map className='w-5 h-5 text-gray-700' />
          <h3 className='text-gray-800 text-lg font-semibold'>지도</h3>
        </div>
        <p className='text-gray-500 text-sm font-medium'>
          {METADATA_JSON.placeName}{' '}
          <span className='text-gray-500 font-normal text-xs'>{METADATA_JSON.placeAddress}</span>
        </p>
      </div>
      <NaverMap />

      <Link
        className='openApp text-sm border border-gray-200 text-gray-700 bg-white rounded-full py-2 px-4'
        target={isMobile ? '_self' : '_blank'}
        href={
          isMobile
            ? `nmap://search?query=${encodeURI(METADATA_JSON.placeName)}&appname=1116lp.vercel.app`
            : METADATA_JSON.placeNaverMapUrl
        }
      >
        네이버 지도에서 열기
      </Link>
    </section>
  );
};

export default MapSection;
