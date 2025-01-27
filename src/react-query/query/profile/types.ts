import { UseQueryOptions } from '@tanstack/react-query';

export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  phone: string;
}

export interface UserProfileError {
  message: string;
  statusCode: number;
}

export interface UseGetUserProfileInfoQueryOptions {
  queryOptions?: Omit<UseQueryOptions<UserProfile, UserProfileError>, 'queryKey'>;
}
