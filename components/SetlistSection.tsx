'use client';

import { BoomBox } from 'lucide-react';
import LetheLogo from './Common/LetheLogo';
import PsgLogo from './Common/PsgLogo';

const teamsData = [
  {
    teamName: '레테',
    logo: <LetheLogo color='black' width={100} />,
    setlists: [
      {
        singer: 'Lacuna',
        songName: '범람 ',
      },
      {
        singer: 'Lacuna',
        songName: '맨드라미',
      },
      {
        singer: 'THORNAPPLE',
        songName: '석류의 맛',
      },
      {
        singer: 'Lethe',
        songName: '주인공',
      },
      {
        singer: 'Lacuna',
        songName: '날개',
      },
      {
        singer: 'Lethe',
        songName: '일요일',
      },
      {
        singer: '검정치마',
        songName: 'Antifreeze (Arr by Lethe)',
      },
      {
        singer: 'THORNAPPLE',
        songName: '살아있는 너의 밤',
      },
      {
        singer: 'Lethe',
        songName: '끝의 길',
      },
      {
        singer: 'THORNAPPLE',
        songName: '검은 별',
      },
    ],
    bgColor: 'bg-white',
    textColor: 'text-gray-500',
  },
  {
    teamName: '파수꾼',
    logo: <PsgLogo color='black' width={90} />,
    setlists: [
      {
        singer: 'THORNAPPLE',
        songName: '도롱뇽',
      },
      {
        singer: 'THORNAPPLE',
        songName: '아가미',
      },
      {
        singer: 'THORNAPPLE',
        songName: '수성의 하루',
      },
      {
        singer: 'THORNAPPLE',
        songName: '물가의 라이온',
      },
      {
        singer: 'THORNAPPLE',
        songName: '어려운 달',
      },
      {
        singer: 'THORNAPPLE',
        songName: '야광',
      },
      {
        singer: 'THORNAPPLE',
        songName: '멸종',
      },
      {
        singer: 'THORNAPPLE',
        songName: '한낮',
      },
      {
        singer: 'THORNAPPLE',
        songName: '시퍼런 봄',
      },
      {
        singer: '파수꾼',
        songName: '편도',
      },
    ],
    bgColor: 'bg-white',
    textColor: 'text-gray-500',
  },
];

const SetlistSection = () => {
  return (
    <section className='flex flex-col items-center w-full sm:rounded-lg sm:shadow-md overflow-hidden bg-white px-4 py-6'>
      <div className='w-full flex items-center gap-2'>
        <BoomBox className='w-5 h-5 text-gray-700' />
        <h3 className='text-gray-800 text-lg font-semibold'>셋리스트</h3>
      </div>
      {teamsData.map((team, index) => (
        <div key={index} className={`flex flex-col w-full gap-10 h-full p-6`}>
          <section className={`text-center ${team.textColor}`}>
            <div className='flex items-center justify-center gap-3 mb-6'>
              <h1 className='hidden text-4xl font-bold'>{team.teamName}</h1>
              {team.logo}
            </div>

            <div className='flex flex-col gap-2'>
              {team.setlists.length > 0
                ? team.setlists.map((list: any, idx: any) => (
                    <p key={idx}>
                      {list.singer === '' && list.songName === '' ? (
                        <>&nbsp;</>
                      ) : list.singer === '' ? (
                        `${list.songName}`
                      ) : (
                        `${list.singer} - ${list.songName}`
                      )}
                    </p>
                  ))
                : 'Soon'}
            </div>
          </section>
        </div>
      ))}
    </section>
  );
};

export default SetlistSection;
