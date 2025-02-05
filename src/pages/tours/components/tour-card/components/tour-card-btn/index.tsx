import { TourData } from '@/api/tours/tours-data';
import { buttonStyles } from '@/pages/tours/tours.styles';
import { Button } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TourCardBtn: FC<{ tour: TourData }> = ({tour}) => {
  const { t } = useTranslation('tours');

  return (
    <div className="mt-4 flex items-end justify-end">
      <Link to={`/tours/${tour.id}`}>
        <Button className={buttonStyles()}>{t('tour-view-more')}</Button>
      </Link>
    </div>
  );
};

export default TourCardBtn;
