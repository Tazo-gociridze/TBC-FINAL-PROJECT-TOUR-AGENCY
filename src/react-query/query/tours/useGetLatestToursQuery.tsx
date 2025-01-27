import { fetchLatestTours } from '@/api/tours/latest-tours';
import {
  UseQueryResult,
  useQuery,
  QueryFunction,
} from '@tanstack/react-query';
import { TOURS_QUERY_KEY } from './enum';
import { ToursError, UseGetLatestToursQueryOptions } from './types';
import { TourData } from '@/api/tours/tours-data';


const useGetLatestToursQuery = ({
    queryOptions = {}
}: UseGetLatestToursQueryOptions): UseQueryResult<TourData[], ToursError> => {
  return useQuery<TourData[], ToursError>({
    queryKey: [TOURS_QUERY_KEY.LATEST_TOURS],
    queryFn: fetchLatestTours as QueryFunction<TourData[], readonly unknown[], never>,
      ...queryOptions
  });
};

export default useGetLatestToursQuery;
