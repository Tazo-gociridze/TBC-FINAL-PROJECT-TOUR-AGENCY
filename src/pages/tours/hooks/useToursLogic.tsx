import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getTours } from '@/api/tours/tours-data';
import qs from 'qs';

const useToursLogic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchSort = searchParams.get('sort');
  const searchSearchTerm = searchParams.get('search') || '';

  const [sort, setSort] = useState(searchSort || ''); 
  const [searchTerm, setSearchTerm] = useState(searchSearchTerm);

  const {
    data,
    refetch,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage, 
  } = useInfiniteQuery({
    queryKey: ['get-tours', { sort, searchTerm }],
    queryFn: ({ pageParam = 0 }) => getTours(sort, searchTerm, pageParam), 
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage, 
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [searchTerm, sort, refetch]);

  const updateQueryParams = (newParams: Record<string, string>) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const updatedParams = qs.stringify({ ...currentParams, ...newParams }, { addQueryPrefix: true });
    window.history.pushState({}, '', updatedParams);
    setSearchParams(newParams);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    updateQueryParams({ search: value, sort });
  };

  const handleSort = (value: string) => {
    if (value === 'none') {
      setSort('');
      updateQueryParams({ sort: '', search: searchTerm });
    } else {
      setSort(value);
      updateQueryParams({ sort: value, search: searchTerm });
    }
  };

  useEffect(() => {
    if (!searchSort) {
      setSort('');
    }
  }, [searchSort]);

  const sortedData = data?.pages
    .flatMap((page) => page.data)
    .sort((a, b) => {

      if (sort === '' || sort === 'none') {
        return 0;
      }

      if (sort === 'price') {
        return a.price - b.price;
      }

      if (sort === 'date') {
        return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
      }

      return 0;
    });
  return {
    data: sortedData,
    handleSearch,
    handleSort,
    searchTerm,
    sort,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage, 
  };
};

export default useToursLogic;