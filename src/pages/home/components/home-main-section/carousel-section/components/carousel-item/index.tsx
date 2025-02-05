import DarkenImage from '@/utils/DarkenImage/DarkenImage';
import { Button } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import useCarouselItemLogic, { CarouselItemProps } from './hook/useCarouselItemLogic';


const CarouselItem: FC<CarouselItemProps> = ({ tour }) => {
const {contentStyle, t} = useCarouselItemLogic({tour})
  return (
    <div className="group h-full w-full">
      <DarkenImage>
        <div className="bg-cover bg-center" style={contentStyle}>
          <div className="flex h-full w-full cursor-pointer items-center justify-center
           bg-[#00000057] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link to={`tours/${tour.id}`}>
              <Button className="text-bold bg-[#ffffff85] px-14 py-6 text-xl text-white">
                {t('slider-btn')}
              </Button>
            </Link>
          </div>
        </div>
      </DarkenImage>
    </div>
  );
};

export default CarouselItem;
