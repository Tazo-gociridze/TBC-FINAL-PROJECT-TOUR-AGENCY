import { fetchSpecificTour } from '@/api/tours/specific-tour';
import { UseQueryResult, useQuery, QueryFunction } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { TOURS_QUERY_KEY } from './enum';
import { ToursError, UseGetSpecificTourQueryOptions } from './types';
import { TourData } from '@/api/tours/tours-data';

const useGetSpecificTourQuery = ({
  queryOptions = {},
}: UseGetSpecificTourQueryOptions): UseQueryResult<TourData, ToursError> => {
  const { tourId } = useParams();

  return useQuery<TourData, ToursError>({
    queryKey: [TOURS_QUERY_KEY.SPECIFIC_TOUR, tourId],
    queryFn: (async (): Promise<TourData> => {
      if (!tourId) {
        throw new Error('Tour ID is missing');
      }
      const tour = await fetchSpecificTour(tourId as string);
      if (!tour) {
        throw new Error('Tour not found');
      }
      return tour;
    }) as QueryFunction<TourData, readonly unknown[], never>,
    enabled: !!tourId,
    ...queryOptions,
  });
};

export default useGetSpecificTourQuery;
