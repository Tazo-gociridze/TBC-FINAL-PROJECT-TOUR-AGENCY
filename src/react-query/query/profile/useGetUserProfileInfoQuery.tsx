import { fetchUserProfile } from '@/api/profile/edit';
import { useAuth } from '@/store/auth';
import {
  UseQueryResult,
  useQuery,
  QueryFunction,
} from '@tanstack/react-query';
import { PROFILE_QUERY_KEY } from './enum';
import { UseGetUserProfileInfoQueryOptions, UserProfile, UserProfileError } from './types';


const useGetUserProfileInfoQuery = ({
  queryOptions = {},
}: UseGetUserProfileInfoQueryOptions): UseQueryResult<UserProfile, UserProfileError> => {
  const [user] = useAuth();

  return useQuery<UserProfile, UserProfileError>({
    queryKey: [PROFILE_QUERY_KEY.USER_PROFILE, user?.id],
    queryFn: (async (): Promise<UserProfile> => {
      if (!user?.id) {
        throw new Error('User ID is missing');
      }
      const profile = await fetchUserProfile(user.id);
      if (!profile) {
        throw new Error('Profile not found');
      }
      return profile;
    }) as QueryFunction<UserProfile, readonly unknown[], never>,
    enabled: !!user?.id,
    ...queryOptions,
  });
};

export default useGetUserProfileInfoQuery;