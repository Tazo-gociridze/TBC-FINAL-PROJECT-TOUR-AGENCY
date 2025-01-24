import { TourData } from "@/api/tours/tours-data";
import DarkenImage from "@/utils/DarkenImage/DarkenImage";
import { Button } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const CarouselItem:FC<{tour: TourData}> = ({tour}) => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    textAlign: 'center',
    backgroundImage: `url(${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE}${tour.image_url})`
  };
const { t } = useTranslation('home');

  return (
    <div className="group h-full w-full bg-[black]">
    <DarkenImage>
      <div className="bg-main-background-3 bg-cover" style={contentStyle}>
        <div className="flex h-full w-full items-center justify-center bg-[#00000057]
         cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          <Button className="px-10 py-4">{t('slider-btn')}</Button>
        </div>
      </div>
    </DarkenImage>
  </div>
  )
};

export default CarouselItem;
