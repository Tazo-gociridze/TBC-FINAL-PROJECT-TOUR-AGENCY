import { fetchLatestTours } from '@/api/tours/latest-tours';
import { useQuery } from '@tanstack/react-query';

const useGetLatestToursQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ['latest-tours'],
    queryFn: fetchLatestTours,
  });
  return {
    data,
    isPending,
  };
};

export default useGetLatestToursQuery;
