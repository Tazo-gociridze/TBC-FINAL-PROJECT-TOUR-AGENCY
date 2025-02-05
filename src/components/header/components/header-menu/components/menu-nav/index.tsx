import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuNav: FC<{ resetState: () => void }> = ({ resetState }) => {
  const { t } = useTranslation('header');
  return (
    <div className="flex flex-col text-white *:flex *:w-full *:items-center *:justify-between *:bg-[#16330c] *:px-7 *:py-5 *:dark:bg-[#1a1919]">
      <Link className="hover:bg-[#305e20] dark:hover:bg-[#312f2f]" onClick={resetState} to={'/'}>
        <span>{t('navHome')}</span>
        <span className="text-[11px]">
          <FaCircle />
        </span>
      </Link>
      <Link
        className="hover:bg-[#305e20] dark:hover:bg-[#312f2f]"
        onClick={resetState}
        to={'tours'}
      >
        <span>{t('navTours')}</span>
        <span className="text-[11px]">
          <FaCircle />
        </span>
      </Link>
    </div>
  );
};

export default MenuNav;
