import { Image } from "antd";
import { FC } from "react";

const DetailsImage:FC<{image_url: string}> = ({image_url}) => {
  return (
    <div className="h-80 w-full md:h-80 lg:h-full">
    <Image
      src={`${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE}${image_url}`}
      width={'100%'}
      height={'100%'}
      style={{
        objectFit: 'cover',
        borderRadius: '8px',
        backgroundSize: 'cover',
      }}
    />
  </div>
  )
};

export default DetailsImage;
