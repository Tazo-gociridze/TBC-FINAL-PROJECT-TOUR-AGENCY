import { Image } from 'antd';
import { FC } from 'react';
import noImage from '@/images/no-image.webp';

const DetailsImage: FC<{ image_url: string | undefined }> = ({ image_url }) => {
  const storage = import.meta.env.VITE_SUPABASE_IMAGE_STORAGE
  return (
    <div className="h-80 w-full md:h-80 lg:h-full">
      <Image
        src={image_url ? `${storage}${image_url}` : noImage}
        width={'100%'}
        height={'100%'}
        style={{
          objectFit: 'cover',
          borderRadius: '8px',
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
};

export default DetailsImage;
