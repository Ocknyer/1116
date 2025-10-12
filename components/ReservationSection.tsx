'use client';

import { BANK_ACCOUNT, noticeData } from '@/constant';
import useCopyClipboard from '@/hooks/useCopyClipboard';

const ReservationSection = () => {
  const { copyToClipboard } = useCopyClipboard();

  return (
    <section className='flex flex-col justify-center items-center gap-y-3 relative p-6'>
      <div className='flex flex-col gap-y-2 text-gray-600'>
        <p className='text-xs'>
          입금계좌 | {BANK_ACCOUNT.bank}{' '}
          <span
            onClick={() =>
              copyToClipboard(`${BANK_ACCOUNT.bank} ${BANK_ACCOUNT.account}`, '계좌번호가 복사되었습니다.')
            }
            className='underline decoration-solid'
          >
            {BANK_ACCOUNT.account}
          </span>{' '}
          {BANK_ACCOUNT.name}
        </p>
        {noticeData.map((item, index) => (
          <div className='flex gap-x-2' key={index}>
            <p className='text-xs'>{index + 1}.</p>
            <p className='text-xs' key={index}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReservationSection;
