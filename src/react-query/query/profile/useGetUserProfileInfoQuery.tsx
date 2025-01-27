import { fetchUserProfile } from '@/api/profile/edit';
import { useAuth } from '@/store/auth';
import { useQuery } from '@tanstack/react-query';
import { PROFILE_QUERY_KEY } from './enum';

const useGetUserProfileInfoQuery = () => {
  const [user] = useAuth();

  const { data, refetch } = useQuery({
    queryKey: [PROFILE_QUERY_KEY.USER_PROFILE, user?.id],
    queryFn: () => {
      return fetchUserProfile(user?.id as string);
    },
    enabled: !!user?.id,
  });

  return {
    data,
    refetch,
  };
};

export default useGetUserProfileInfoQuery;
