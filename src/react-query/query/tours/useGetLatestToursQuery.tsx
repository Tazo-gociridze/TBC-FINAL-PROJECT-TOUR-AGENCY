import { fetchLatestTours } from '@/api/tours/latest-tours';
import { useQuery } from '@tanstack/react-query';
import { TOURS_QUERY_KEY } from './enum';

const useGetLatestToursQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: [TOURS_QUERY_KEY.LATEST_TOURS],
    queryFn: fetchLatestTours,
  });
  return {
    data,
    isPending,
  };
};

export default useGetLatestToursQuery;
