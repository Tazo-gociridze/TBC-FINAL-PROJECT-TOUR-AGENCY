import FixedWidthWrapper from '@/utils/FixedWidthWrapper/index.tsx';
import HeaderLogo from './components/header-logo';
import HeaderNav from './components/header-nav';
import HeaderTools from './components/header-tools';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#0A2C00] py-5 transition-colors duration-500 dark:bg-[#161616]">
      <FixedWidthWrapper>
        <HeaderLogo />
        <HeaderNav />
        <HeaderTools />
      </FixedWidthWrapper>
    </header>
  );
};

export default Header;
