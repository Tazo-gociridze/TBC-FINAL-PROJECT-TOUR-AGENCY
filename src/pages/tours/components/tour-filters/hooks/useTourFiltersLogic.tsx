import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '@/hooks/useDebaunce/index.tsx';

export interface TourFiltersLogicProps {
  handleSearch: (value: string) => void;
  handleSort: (value: string) => void;
}

export const useTourFiltersLogic = ({ handleSearch, handleSort }: TourFiltersLogicProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [sort, setSort] = useState(searchParams.get('sort') || 'none');
  const debouncedSearch = useDebounce(handleSearch, 500);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    handleSort(value);
    const newParams = new URLSearchParams(searchParams.toString());
    if (value !== 'none') {
      newParams.set('sort', value);
    } else {
      newParams.delete('sort');
    }
    setSearchParams(newParams);
  };

  useEffect(() => {
    const currentSearch = searchParams.get('search') || '';
    if (currentSearch !== searchTerm) {
      setSearchTerm(currentSearch);
    }

    const currentSort = searchParams.get('sort') || 'none';
    if (currentSort !== sort) {
      setSort(currentSort);
    }
    //eslint-disable-next-line
  }, [searchParams]);

  return {
    searchTerm,
    sort,
    handleSearchChange,
    handleSortChange,
  };
};