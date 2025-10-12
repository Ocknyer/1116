'use client';

import LetheLogo from './Common/LetheLogo';
import PsgLogo from './Common/PsgLogo';

const teamsData = [
  {
    teamName: '레테',
    logo: <LetheLogo color='black' width={100} />,
    setlists: [],
    bgColor: 'bg-slate-50',
    textColor: 'text-primary',
  },
  {
    teamName: '파수꾼',
    logo: <PsgLogo color='black' width={90} />,
    setlists: [],
    bgColor: 'bg-slate-50',
    textColor: 'text-primary',
  },
];

const SetlistSection = () => {
  return (
    <section className='flex flex-col items-center w-full sm:rounded-lg sm:shadow-md overflow-hidden'>
      {teamsData.map((team, index) => (
        <div className={`flex flex-col w-full gap-10 h-full p-6 ${team.bgColor}`}>
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
                : '셋리스트 준비중입니다.'}
            </div>
          </section>
        </div>
      ))}
    </section>
  );
};

export default SetlistSection;
