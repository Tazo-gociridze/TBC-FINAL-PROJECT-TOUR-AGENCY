import HomeMainSectionCarousel from '../../components/home-main-section/carousel-section';
import HomeMainSectionText from '../../components/home-main-section/text-section';

const HomeMainSection = () => {
  return (
    <section className="transition-* h-[150vh] lg:h-[100vh] bg-main-background-2 bg-fixed bg-center duration-500 dark:bg-main-background-1 bg-no-repeat bg-cover">
      <div className="flex h-full w-full items-center justify-center bg-[#5234353f] transition-colors duration-500 dark:bg-[#000000b9]">
        <div className="grid grid-cols-1 gap-y-16 items-center gap-x-10 xl:gap-x-56 lg:grid-cols-2">
          <HomeMainSectionText />
          <HomeMainSectionCarousel />
        </div>
      </div>
    </section>
  );
};

export default HomeMainSection;
