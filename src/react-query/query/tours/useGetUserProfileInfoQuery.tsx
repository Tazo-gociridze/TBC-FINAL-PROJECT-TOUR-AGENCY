import { fetchUserProfile } from "@/api/profile/edit";
import { useAuth } from "@/store/auth";
import { useQuery } from "@tanstack/react-query";

const useGetUserProfileInfoQuery = () => {  
    const [user] = useAuth();

    const { data, refetch } = useQuery({
        queryKey: ['userProfile', user?.id],
        queryFn: () => {
          return fetchUserProfile(user?.id as string);
        },
        enabled: !!user?.id,
      });

  return {
    data,
    refetch 
  }
};

export default useGetUserProfileInfoQuery;
