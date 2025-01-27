import { fetchSpecificTour } from '@/api/tours/specific-tour';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useGetSpecificTourQuery = () => {
  const { tourId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['fetch-specific-tour', tourId],
    queryFn: () => fetchSpecificTour(tourId as string),
    enabled: !!tourId,
  });
  
  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetSpecificTourQuery;
