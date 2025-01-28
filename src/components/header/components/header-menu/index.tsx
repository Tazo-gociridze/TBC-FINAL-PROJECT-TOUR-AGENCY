import { FC } from 'react';
import MenuNav from './components/menu-nav';
import MenuBtns from './components/menu-btns';
import useHeaderMenuLogic from './hooks/useHeaderMenuLogic';

interface HeaderMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: (state: boolean) => void;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ setIsMenuActive, isMenuActive }) => {
  const { resetState } = useHeaderMenuLogic({ setIsMenuActive });

  return (
    <>
      <div
        className={`absolute left-0 z-[9999] w-full bg-[#163b0a] pb-3 transition-all duration-500 dark:bg-[#222222] ${
          isMenuActive ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <MenuNav resetState={resetState} />
        <MenuBtns setIsMenuActive={setIsMenuActive} />
      </div>
    </>
  );
};

export default HeaderMenu;
