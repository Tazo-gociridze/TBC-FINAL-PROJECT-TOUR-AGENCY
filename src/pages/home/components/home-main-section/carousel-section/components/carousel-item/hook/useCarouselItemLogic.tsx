import { TourData } from '@/api/tours/tours-data';
import noImage from '@/images/no-image.webp'
import { useTranslation } from 'react-i18next';

export interface CarouselItemProps {
  tour: TourData;
}

const useCarouselItemLogic = ({tour}: CarouselItemProps) => {
  const { image_url } = tour;
  const storage = import.meta.env.VITE_SUPABASE_IMAGE_STORAGE;
  const BACKGROUND_IMAGE = image_url ? `url(${storage}${image_url})` : `url(${noImage})`;
  const { t } = useTranslation('home');

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    textAlign: 'center',
    backgroundImage: BACKGROUND_IMAGE,
  };

  return {
    t,
    contentStyle
  };
};

export default useCarouselItemLogic;
