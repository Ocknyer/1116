import { METADATA_JSON } from '@/constant';
import Link from 'next/link';
import NaverMap from './NaverMap';

const MapSection = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <section className='flex flex-col items-center justify-center text-center w-full gap-4 px-6 py-8 bg-slate-50 sm:rounded-lg sm:shadow-md'>
      <NaverMap />

      <Link
        className='openApp text-sm border border-gray-200 text-gray-700 bg-slate-50 rounded-full py-2 px-4'
        target={isMobile ? '_self' : '_blank'}
        href={isMobile ? 'nmap://place?id=1175505220&appname=com.example.1116' : METADATA_JSON.placeNaverMapUrl}
      >
        네이버 지도에서 열기
      </Link>
    </section>
  );
};

export default MapSection;
