import { getTours } from '@/api/tours/tours-data';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useGetToursQuery = () => {
  const [searchParams] = useSearchParams();
  const searchSort = searchParams.get('sort');
  const searchSearchTerm = searchParams.get('search') || '';

  const [sort, setSort] = useState(searchSort || '');
  const [searchTerm, setSearchTerm] = useState(searchSearchTerm);

  const { data, refetch, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['get-tours', { sort, searchTerm }],
    queryFn: ({ pageParam = 0 }) => getTours(sort, searchTerm, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: false,
  });

  return {
    data,
    refetch,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    setSort,
    setSearchTerm,
    searchTerm,
    sort
  };
};

export default name;
