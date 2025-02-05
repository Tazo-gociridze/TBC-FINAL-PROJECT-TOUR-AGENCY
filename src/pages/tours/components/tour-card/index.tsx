import { Card} from 'antd';
import { cardStyles} from '../../tours.styles.ts';
import { FC } from 'react';
import { TourData } from '@/api/tours/tours-data/index.ts';
import TourCardDescription from './components/tour-card-description/index.tsx';
import TourCardBtn from './components/tour-card-btn/index.tsx';
import TourCardImage from './components/tour-card-image/index.tsx';

const TourCard: FC<{ tour: TourData }> = ({ tour }) => {
  return (
    <Card
      key={tour.id}
      hoverable
      className={cardStyles()}
      cover={
       <TourCardImage tour={tour}/>
      }
    >
     <TourCardDescription tour={tour}/>
     <TourCardBtn tour={tour}/>
    </Card>
  );
};

export default TourCard;
