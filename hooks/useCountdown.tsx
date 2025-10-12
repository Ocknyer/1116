'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import duration from 'dayjs/plugin/duration';
import { useEffect, useState } from 'react';
dayjs.locale('ko');

dayjs.extend(duration);

export default function useCountdown(targetTime: string) {
  const [remainingTime, setRemaingTime] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const currentTime = dayjs();
      const targetDate = dayjs(targetTime);
      const nextDay = targetDate.add(1, 'day').startOf('day');

      if (currentTime.isAfter(targetDate) && currentTime.isBefore(nextDay)) {
        setRemaingTime('D-DAY');
        setIsLoading(false);
        return;
      }

      if (currentTime.isAfter(nextDay)) {
        setRemaingTime('종료된 공연입니다.');
        setIsLoading(false);
        return;
      }

      const diffDays = targetDate.startOf('day').diff(currentTime.startOf('day'), 'day');

      const duration = dayjs.duration(targetDate.diff(currentTime));
      const hours = String(duration.hours()).padStart(2, '0');
      const minutes = String(duration.minutes()).padStart(2, '0');
      const seconds = String(duration.seconds()).padStart(2, '0');

      if (diffDays === 0) {
        setRemaingTime(`공연까지 ${hours} 시간 ${minutes} 분 ${seconds} 초`);
      } else {
        setRemaingTime(`공연까지 ${diffDays}일 ${hours} 시간 ${minutes} 분`);
      }

      setIsLoading(false);
    };

    calculateRemainingTime();
    const intervalId = setInterval(calculateRemainingTime, 1000);
    return () => clearInterval(intervalId);
  }, [targetTime]);

  return {
    remainingTime,
    isLoading,
  };
}
