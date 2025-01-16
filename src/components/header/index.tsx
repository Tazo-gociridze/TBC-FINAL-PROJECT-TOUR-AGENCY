import FixedWidthWrapper from '@/utils/FixedWidthWrapper/index.tsx';
import HeaderLogo from './components/header-logo';
import HeaderNav from './components/header-nav';
import HeaderTools from './components/header-tools';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full bg-[#523435] py-8 transition-colors duration-500 dark:bg-[#161616]">
      <FixedWidthWrapper>
        <HeaderLogo />
        <HeaderNav />
        <HeaderTools />
      </FixedWidthWrapper>
    </header>
  );
};

export default Header;
