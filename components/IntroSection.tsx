import { END_TIME, METADATA_JSON, TICKET_PRICE } from '@/constant';
import useCopyClipboard from '@/hooks/useCopyClipboard';
import posterImage from '@/public/image/poster-square.webp';
import dayjs from 'dayjs';
import { CalendarDays, MapPin, Share, Ticket } from 'lucide-react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const IntroSection = () => {
  const { copyToClipboard } = useCopyClipboard();

  return (
    <div className='flex flex-col gap-2 justify-between w-full sm:rounded-b-lg sm:shadow-md overflow-hidden'>
      <Fade direction='up' triggerOnce duration={1000}>
        <section className='w-full h-fit laptop:sticky laptop:top-20 laptop:z-20 bg-slate-50'>
          <div className='flex flex-col h-fit bg-white tablet:rounded-lg relative '>
            {/* 이미지 */}
            <div className='w-full aspect-square relative'>
              <Image src={posterImage} alt='공연 포스터' fill className='object-contain' />
            </div>

            {/* 타이틀 영역 */}
            <div className='flex flex-col gap-2 p-4 mt-2'>
              <div className='flex justify-between items-center gap-4'>
                <h1 className='text-xl font-semibold'>{METADATA_JSON.title}</h1>
                <Share
                  className='w-5 h-5 text-gray-700'
                  onClick={() => copyToClipboard(METADATA_JSON.url, '링크가 복사되었습니다.')}
                />
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
            <div className='p-4 flex flex-col gap-2 laptop:gap-[10px] mb-2'>
              <div className='flex gap-2 items-center'>
                <Ticket className='w-5 h-5 text-gray-700' />
                <p className='text-gray-700 font-medium'>{TICKET_PRICE.toLocaleString()}원</p>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default IntroSection;
