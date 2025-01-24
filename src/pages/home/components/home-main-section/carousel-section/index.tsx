import { Carousel, ConfigProvider } from 'antd';
import CarouselItem from './components/carousel-item';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestTours } from '@/api/tours/latest-tours';


const HomeMainSectionCarousel = () => {
  const {data} = useQuery({queryKey: ['latest-tours'], queryFn: fetchLatestTours})

  console.log(data)
  return (
    <div className="relative shadow-2xl">
      <div className="absolute right-7 top-7 z-0 h-[500px] w-full bg-[var(--main-color)] opacity-80 dark:opacity-60"></div>
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
            {data?.map((tour) => (
              <CarouselItem key={tour.id} tour={tour}/>
            ))}
          </Carousel>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default HomeMainSectionCarousel;
