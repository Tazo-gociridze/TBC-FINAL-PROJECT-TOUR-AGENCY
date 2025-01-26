import HomeMainSectionCarousel from '../../components/home-main-section/carousel-section';
import HomeMainSectionText from '../../components/home-main-section/text-section';

const HomeMainSection = () => {
  return (
    <section className="transition-* h-[150vh] bg-main-background-2 bg-cover bg-fixed bg-center bg-no-repeat duration-500 lg:h-[100vh] dark:bg-main-background-1">
      <div className="flex h-full w-full items-center justify-center bg-[#5234353f] transition-colors duration-500 dark:bg-[#000000b9]">
        <div className="grid grid-cols-1 items-center gap-x-10 gap-y-16 lg:grid-cols-2 xl:gap-x-56">
          <HomeMainSectionText />
          <HomeMainSectionCarousel />
        </div>
      </div>
    </section>
  );
};

export default HomeMainSection;
