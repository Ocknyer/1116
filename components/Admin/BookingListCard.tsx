'use client';

import useCopyClipboard from '@/hooks/useCopyClipboard';

interface BookingListCardProps {
  data: any;
  idx: number;
  updateCheckedState: (id: number, checked: boolean) => void;
}

const BookingListCard = ({ data, idx, updateCheckedState }: BookingListCardProps) => {
  const { copyToClipboard } = useCopyClipboard();

  return (
    <li key={idx} className='bg-white p-4 relative shadow-md rounded-md'>
      <p className='absolute right-2 top-2 text-gray-500'>{data.id}</p>
      <div className='flex gap-2 items-center mb-2'>
        <p className='text-xl font-bold text-gray-800'>{data.name}</p>
        <p className='text-gray-500'>{data.count}매</p>
      </div>
      <p className='text-gray-800/80 text-lg font-bold mb-1'>
        전화번호:{' '}
        <span className='underline' onClick={() => copyToClipboard(data.phone_number, '전화번호가 복사되었습니다.')}>
          {data.phone_number}
        </span>
      </p>

      <p className='text-gray-800/80'>예매 날짜: {data.createdAt}</p>

      <button
        onClick={() => updateCheckedState(data.id, data.checked)}
        className={`absolute right-2 bottom-2 text-white px-2 py-1 rounded-md ${
          data.checked ? 'bg-gray-300 text-gray-400' : 'bg-primary text-white'
        }`}
      >
        {data.checked ? '취소' : '입장확인'}
      </button>
    </li>
  );
};

export default BookingListCard;
