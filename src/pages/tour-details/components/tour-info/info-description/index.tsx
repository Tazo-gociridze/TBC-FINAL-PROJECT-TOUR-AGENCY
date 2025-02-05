import { TourData } from '@/api/tours/tours-data';
import { FC } from 'react';

const InfoDescription: FC<{ data: TourData }> = ({ data }) => {
  return (
    <div>
      <h2 className="text-md mb-2 font-semibold text-gray-800">Description</h2>
      <p className="text-sm text-gray-700 whitespace-pre-line max-h-[150px] overflow-y-auto">{data.description}</p>
    </div>
  );
};

export default InfoDescription;
