import { TourData } from '@/api/tours/tours-data';
import { FC } from 'react';

const InfoFooter: FC<{ data: TourData }> = ({ data }) => {
  return (
    <div className="mt-auto flex items-center justify-between border-t pt-4 text-sm text-gray-500">
      <p>Created on: {new Date(data.created_at).toLocaleDateString()}</p>
      <button className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600">
        Book Now
      </button>
    </div>
  );
};

export default InfoFooter;
