import { Card, Image, Button } from 'antd';
import { formatDate } from '@/utils/FormatDate/FormatDate';
import { cardStyles, cardMetaStyles, buttonStyles } from '../../tours.styles.ts';
import { FC } from 'react';
import { TourData } from '@/api/tours/tours-data/index.ts';

const TourCard: FC<{ tour: TourData }> = ({ tour }) => {
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
            className="max-h-72 w-full rounded-t-xl object-cover"
          />
        ) : null
      }
    >
      <Card.Meta
        title={<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h3>}
        description={
          <>
            <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3">{description}</p>
            <div className="mt-3">
              <p className="text-lg font-semibold text-yellow-500">{`Price: $${price}`}</p>
              {start_date && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Start Date: {formatDate(start_date)}
                </p>
              )}
              {end_date && (
                <p className="text-sm mb-5 text-gray-600 dark:text-gray-400">
                  End Date: {formatDate(end_date)}
                </p>
              )}
            </div>
          </>
        }
        className={cardMetaStyles()}
      />
      <div className="mt-4 flex justify-end">
        <Button className={buttonStyles()}>View More</Button>
      </div>
    </Card>
  );
};

export default TourCard;
