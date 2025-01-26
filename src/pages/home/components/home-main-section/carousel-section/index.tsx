import { Carousel, ConfigProvider } from 'antd';
import CarouselItem from './components/carousel-item';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestTours } from '@/api/tours/latest-tours';

const HomeMainSectionCarousel = () => {
  const { data, isPending } = useQuery({ queryKey: ['latest-tours'], queryFn: fetchLatestTours });

  const parentStyles = `absolute right-7 top-7 z-0 ${!isPending ? 'h-[500px]' : 'h-0'}
   w-full bg-[var(--main-color)] opacity-80 dark:opacity-60`;

  return (
    <div className="relative shadow-2xl">
      <div className={parentStyles}></div>
      <div className="z-20">
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                arrowSize: 32,
              },
            },
          }}
        >
          
          <Carousel arrows infinite={true} autoplay autoplaySpeed={3000} draggable>
            {data?.map((tour) => <CarouselItem key={tour.id} tour={tour} />)}
          </Carousel>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default HomeMainSectionCarousel;
