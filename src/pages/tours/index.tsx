import { Empty, Spin } from 'antd';

import TourCard from './components/tour-card/index.tsx';
import TourFilters from './components/tour-filters/index.tsx';
import ToursTitle from './components/tour-title/index.tsx';
import useToursLogic from './hooks/useToursLogic.tsx';

import { sectionStyles } from './tours.styles.ts';

const Tours = () => {
  const { data, handleSearch, handleSort, isLoading, isError } = useToursLogic();

  if (isLoading) {
    return (
      <section className={sectionStyles()}>
        <ToursTitle />
        <TourFilters handleSearch={handleSearch} handleSort={handleSort} />
        <div className="flex h-96 items-center justify-center">
          <Spin size="large" />
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={sectionStyles()}>
        <ToursTitle />
        <TourFilters handleSearch={handleSearch} handleSort={handleSort} />
        <div className="flex h-96 items-center justify-center">
          <p>Error loading tours. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={sectionStyles()}>
      <ToursTitle />
      <TourFilters handleSearch={handleSearch} handleSort={handleSort} />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <div className="col-span-full flex items-center justify-center">
            <Empty description="No tours available" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tours;
