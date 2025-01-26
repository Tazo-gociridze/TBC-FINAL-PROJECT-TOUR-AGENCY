import MapLocation from './components/map-location';
import FooterContact from './views/contacts';
import FooterSocial from './views/social';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A2C00] p-6 duration-300 2xl:px-32 dark:bg-[#161616]">
      <section className="flex h-full flex-wrap items-center justify-between gap-y-10 py-10 md:flex-wrap lg:flex-nowrap">
        <FooterContact />
        <FooterSocial />
        <MapLocation />
      </section>
    </footer>
  );
};

export default Footer;
