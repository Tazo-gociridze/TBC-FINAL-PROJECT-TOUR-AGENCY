import { TourData } from '@/api/tours/tours-data';
import { UseQueryOptions } from '@tanstack/react-query';

// LATEST TOURS /////////////

export interface ToursError {
  message: string;
  statusCode: number;
}

export interface UseGetLatestToursQueryOptions {
  queryOptions?: Omit<UseQueryOptions<TourData[], ToursError>, 'queryKey'>;
}

// SPECIFIC TOUR ////////////

export interface ToursError {
  message: string;
  statusCode: number;
}

export interface UseGetSpecificTourQueryOptions {
  queryOptions?: Omit<UseQueryOptions<TourData, ToursError>, 'queryKey'>;
}
