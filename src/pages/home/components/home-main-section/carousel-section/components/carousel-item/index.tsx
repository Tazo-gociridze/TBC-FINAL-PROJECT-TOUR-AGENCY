import { TourData } from '@/api/tours/tours-data';
import DarkenImage from '@/utils/DarkenImage/DarkenImage';
import { Button } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface CarouselItemProps {
  tour: TourData; 
}

const CarouselItem: FC<CarouselItemProps> = ({ tour }) => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    textAlign: 'center',
    backgroundImage: `url(${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE}${tour.image_url})`,
  };
  const { t } = useTranslation('home');
  
  return (
    <div className="group h-full w-full">
      <DarkenImage>
        <div className="bg-cover" style={contentStyle} >
          <div className="flex h-full w-full cursor-pointer items-center justify-center bg-[#00000057] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link to={`tours/${tour.id}`}>
              <Button className="px-14 py-6 text-bold text-xl bg-[#ffffff85] text-white">{t('slider-btn')}</Button>
            </Link>
          </div>
        </div>
      </DarkenImage>
    </div>
  );
};

export default CarouselItem;
