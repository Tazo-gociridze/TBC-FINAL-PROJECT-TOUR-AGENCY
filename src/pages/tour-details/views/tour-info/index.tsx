import { TourData } from '@/api/tours/tours-data';
import { FC } from 'react';
import InfoTitle from '../../components/tour-info/info-title';
import InfoStartEndDate from '../../components/tour-info/info-start-end-date';
import InfoDescription from '../../components/tour-info/info-description';
import InfoFooter from '../../components/tour-info/info-footer';

const TourInfo: FC<{ data: TourData }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <InfoTitle data={data} />
      <InfoStartEndDate data={data} />
      <InfoDescription data={data} />
      <InfoFooter data={data} />
    </div>
  );
};

export default TourInfo;
