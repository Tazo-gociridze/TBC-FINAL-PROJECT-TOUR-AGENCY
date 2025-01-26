import { TourData } from '@/api/tours/tours-data';
import { FC } from 'react';

const InfoTitle: FC<{ data: TourData }> = ({ data }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-bold text-gray-800">{data.title}</h1>
      <span className="text-lg font-semibold text-green-500">${data.price}</span>
    </div>
  );
};

export default InfoTitle;
