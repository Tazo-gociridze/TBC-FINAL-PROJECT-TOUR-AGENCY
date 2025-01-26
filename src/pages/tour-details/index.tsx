import { fetchSpecificTour } from '@/api/tours/specific-tour';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Spin, Alert } from 'antd';
import DetailsImage from './components/tour-image';
import TourInfo from './views/tour-info';
import TourGoBack from './components/tour-go-back';

const TourDetails = () => {
  const { tourId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['fetch-specific-tour', tourId],
    queryFn: () => fetchSpecificTour(tourId as string),
    enabled: !!tourId,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Alert
          message="Error"
          description="Failed to load tour details. Please try again later."
          type="error"
          showIcon
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Alert
          message="Not Found"
          description="The requested tour was not found."
          type="warning"
          showIcon
        />
      </div>
    );
  }

  const { image_url } = data;

  return (
    <div className="flex min-h-screen w-screen items-center bg-gray-100 px-3 duration-300 sm:px-6 md:px-12 lg:px-20 xl:px-28 dark:bg-[#00000000]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <TourGoBack />
        <div className="mb-16 mt-16 grid h-auto w-full grid-cols-1 bg-gray-200 sm:h-auto md:h-auto md:grid-cols-1 lg:h-3/6 lg:grid-cols-2 xl:h-4/6 dark:bg-gray-300">
          <DetailsImage image_url={image_url} />
          <TourInfo data={data} />
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
