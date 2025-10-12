'use client';

import useCountdown from '@/hooks/useCountdown';
import { AlarmClock } from 'lucide-react';

interface IProps {
  endTime: string;
}

const CountdownBar = ({ endTime }: IProps) => {
  const { remainingTime, isLoading } = useCountdown(endTime);

  return (
    <div className='w-full flex items-center justify-center gap-2 font-bold bg-[#FEF3E2]/50 border-b-2 border-[#FAB12F]/30'>
      <div className='flex max-w-[480px] items-center justify-center gap-2 px-2 py-1'>
        {isLoading ? (
          <div className='h-8 w-48 bg-zinc-700 animate-pulse rounded'></div>
        ) : (
          <>
            <AlarmClock className={`w-5 h-5 ${!remainingTime.includes('일') ? 'text-red-600' : 'text-[#FA812F]'}`} />
            <p className={`${!remainingTime.includes('일') ? 'text-red-600' : 'text-[#FA812F]'} text-sm font-semibold`}>
              {remainingTime}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownBar;
