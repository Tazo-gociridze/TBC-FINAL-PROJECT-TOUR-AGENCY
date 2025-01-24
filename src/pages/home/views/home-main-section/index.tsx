import HomeMainSectionCarousel from '../../components/home-main-section/carousel-section';
import HomeMainSectionText from '../../components/home-main-section/text-section';

const HomeMainSection = () => {
  return (
    <section className="cover transition-* mb-[1000px] h-screen bg-main-background-2 bg-fixed bg-center duration-500 dark:bg-main-background-1">
      <div className="flex h-full w-full items-center justify-center bg-[#5234353f] transition-colors duration-500 dark:bg-[#000000b9]">
        <div className="grid grid-cols-2 items-center gap-56">
          <HomeMainSectionText />
          <HomeMainSectionCarousel />
        </div>
      </div>
    </section>
  );
};

export default HomeMainSection;
