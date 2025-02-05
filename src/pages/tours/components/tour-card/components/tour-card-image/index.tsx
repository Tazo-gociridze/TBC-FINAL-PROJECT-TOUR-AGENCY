import { TourData } from '@/api/tours/tours-data';
import { Image } from 'antd';
import { FC } from 'react';
import noImage from "@/images/no-image.webp"

const TourCardImage: FC<{ tour: TourData }> = ({ tour }) => {
  const { title, image_url } = tour;
  const storage = import.meta.env.VITE_SUPABASE_IMAGE_STORAGE;
  return (
    <>
      {image_url ? (
        <Image
          alt={title}
          src={`${storage}${image_url}`}
          className="max-h-32 min-h-32 min-w-full rounded-t-xl object-cover sm:max-h-72 sm:min-h-72"
        />
      ) : (
        <Image
          alt={title}
          src={noImage}
          className="max-h-32 min-h-32 min-w-full rounded-t-xl object-cover sm:max-h-72 sm:min-h-72"
        />
      )}
    </>
  );
};

export default TourCardImage;
