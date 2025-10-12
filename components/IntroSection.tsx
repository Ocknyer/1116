import { END_TIME, METADATA_JSON, TICKET_PRICE } from '@/constant';
import posterImage from '@/public/image/poster.webp';
import dayjs from 'dayjs';
import { CalendarDays, MapPin, Ticket } from 'lucide-react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import LetheLogo from './Common/LetheLogo';
import PsgLogo from './Common/PsgLogo';

const IntroSection = () => {
  return (
    <div className='flex flex-col gap-2 min-h-dvh justify-between pb-16 sm:pb-24 w-full'>
      <Fade direction='up' triggerOnce duration={1000}>
        {/* <div className='w-96 mx-auto'>
          <Image src={posterImage} alt='intro' className='w-full h-full object-cover' />
        </div> */}
        <section className='w-full h-fit laptop:sticky laptop:top-20 laptop:z-20 bg-slate-50'>
          <div className='flex flex-col h-fit bg-white tablet:rounded-lg relative '>
            {/* 이미지 */}
            <div className='w-full aspect-square relative'>
              <Image src={posterImage} alt='공연 포스터' fill className='object-contain' />
            </div>

            {/* 타이틀 영역 */}
            <div className='flex flex-col gap-2 p-4'>
              <div className='flex justify-between items-center gap-4'>
                <h1 className='text-xl font-semibold'>{METADATA_JSON.title}</h1>
                {/* <ShareDropdown url={`/event/${event.id}`} event={event} size='sm' /> */}
              </div>
            </div>

            {/* 타이틀 영역 구분선 */}
            <div className='w-11/12 h-[1px] bg-gray-200 mx-auto' />

            {/* 정보 영역 */}
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex gap-2 items-center'>
                <MapPin className='w-5 h-5 text-gray-700' />
                <div className='flex flex-col gap-1'>
                  <p className='text-gray-700 font-medium'>{METADATA_JSON.placeName}</p>
                  <span className='text-gray-500 text-sm'>{METADATA_JSON.placeAddress}</span>
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <CalendarDays className='w-5 h-5 text-gray-700' />
                <p className='text-gray-700 font-medium'>
                  {dayjs(END_TIME).locale('ko').format('YYYY.MM.DD (ddd) HH:mm')}
                </p>
              </div>
            </div>

            {/* 정보 영역 구분선 */}
            <div className='w-11/12 h-[1px] bg-gray-200 mx-auto' />

            {/* 가격 영역 */}
            <div className='p-4 flex flex-col gap-2 laptop:gap-[10px]'>
              <div className='flex gap-2 items-center'>
                <Ticket className='w-5 h-5 text-gray-700' />
                <p className='text-gray-700 font-medium'>{TICKET_PRICE.toLocaleString()}원</p>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center text-center w-full bg-slate-50'>
          <div className='flex justify-center w-full mt-4 sm:mt-8'>
            <LetheLogo color='black' width={100} />
            <PsgLogo color='black' width={100} />
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default IntroSection;
