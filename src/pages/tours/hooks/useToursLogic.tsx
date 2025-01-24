import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTours } from '@/api/tours/tours-data';
import qs from 'qs';

const useToursLogic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get('sort') || 'price');
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['get-tours', { sort, searchTerm }],
    queryFn: () => getTours(sort, searchTerm),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [searchTerm, sort, refetch]);

  const updateQueryParams = (newParams: Record<string, string>) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const updatedParams = qs.stringify(
      { ...currentParams, ...newParams },
      { addQueryPrefix: true }
    );
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

  return {
    data,
    handleSearch,
    handleSort,
    searchTerm,
    sort,
    isLoading,
    isError,
  };
};

export default useToursLogic;
