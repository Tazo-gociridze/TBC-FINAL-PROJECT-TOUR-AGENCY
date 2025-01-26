import { Card, Image, Button } from 'antd';
import { formatDate } from '@/utils/FormatDate/FormatDate';
import { cardStyles, cardMetaStyles, buttonStyles } from '../../tours.styles.ts';
import { FC } from 'react';
import { TourData } from '@/api/tours/tours-data/index.ts';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TourCard: FC<{ tour: TourData }> = ({ tour }) => {
  const { t } = useTranslation('tours');
  const { id, title, description, price, start_date, end_date, image_url } = tour;
  const storage = import.meta.env.VITE_SUPABASE_IMAGE_STORAGE;

  return (
    <Card
      key={id}
      hoverable
      className={cardStyles()}
      cover={
        image_url ? (
          <Image
            alt={title}
            src={`${storage}${image_url}`}
            className="max-h-32 min-h-32 w-full rounded-t-xl object-cover sm:max-h-72 sm:min-h-72"
          />
        ) : null
      }
    >
      <Card.Meta
        title={
          <h3 className="text-lg font-medium text-gray-800 sm:text-2xl sm:font-semibold dark:text-white">
            {title}
          </h3>
        }
        description={
          <>
            <p className="line-clamp-2 text-[12px] text-gray-700 sm:line-clamp-3 sm:text-base dark:text-gray-300">
              {description}
            </p>
            <div className="mt-3">
              <p className="text-sm font-semibold text-yellow-500 sm:text-lg">{`Price: $${price}`}</p>
              {start_date && (
                <p className="text-[11px] text-gray-600 sm:text-lg dark:text-gray-400">
                  Start Date: {formatDate(start_date)}
                </p>
              )}
              {end_date && (
                <p className="mb-5 text-[11px] text-gray-600 sm:text-lg dark:text-gray-400">
                  End Date: {formatDate(end_date)}
                </p>
              )}
            </div>
          </>
        }
        className={cardMetaStyles()}
      />
      <div className="mt-4 flex items-end justify-end">
        <Link to={`/tours/${id}`}>
          <Button className={buttonStyles()}>{t('tour-view-more')}</Button>
        </Link>
      </div>
    </Card>
  );
};

export default TourCard;
