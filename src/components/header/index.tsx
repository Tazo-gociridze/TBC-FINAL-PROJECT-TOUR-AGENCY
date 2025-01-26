import HeaderLogo from './components/header-logo';
import HeaderMenu from './components/header-menu';
import HeaderNav from './components/header-nav';
import HeaderTools from './components/header-tools';
import { useState } from 'react';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
<header className="fixed left-0 top-0 z-[10000] w-full bg-[#0A2C00] py-5 transition-colors duration-500 dark:bg-[#161616]">
  <div className="m-auto flex w-full relative items-center justify-between px-3 sm:px-3 md:px-6 lg:px-6 xl:px-6 2xl:px-32">
    <HeaderLogo />
    <HeaderNav />
    <HeaderTools isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
  </div>
  <div
    className={`absolute left-0 top-full z-[0] w-full transition-all duration-300 ease-in-out ${
      isMenuActive ? 'opacity-100  visible' : 'opacity-0 invisible'
    }`}
  >
    <HeaderMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
  </div>
</header>
  );
};

export default Header;

