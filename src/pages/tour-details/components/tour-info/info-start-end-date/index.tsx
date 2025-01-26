import { TourData } from '@/api/tours/tours-data';
import { FC } from 'react';

const InfoStartEndDate: FC<{ data: TourData }> = ({ data }) => {
  return (
    <div className="flex gap-4 text-sm text-gray-600">
      <p>
        <span className="font-semibold">Start Date:</span>{' '}
        {new Date(data.start_date).toLocaleDateString()}
      </p>
      <p>
        <span className="font-semibold">End Date:</span>{' '}
        {new Date(data.end_date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default InfoStartEndDate;
