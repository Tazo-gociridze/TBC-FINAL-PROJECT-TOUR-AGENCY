import { fetchSpecificTour } from '@/api/tours/specific-tour';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { TOURS_QUERY_KEY } from './enum';

const useGetSpecificTourQuery = () => {
  const { tourId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [TOURS_QUERY_KEY.SPECIFIC_TOUR, tourId],
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
