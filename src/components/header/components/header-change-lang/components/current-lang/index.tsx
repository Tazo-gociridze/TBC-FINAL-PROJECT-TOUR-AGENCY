import georgiaImage from '@/images/Home/georgia.png';
import usaImage from '@/images/Home/united-states.png';
import { FC } from 'react';

interface CurrentLangProps {
  openSwitchLanguage: () => void;
  switchLang: string;
}

const CurrentLang: FC<CurrentLangProps> = ({ openSwitchLanguage, switchLang }) => {
  const changedLang = switchLang === 'en' ? 'En' : 'ქა';
  const changedLangSrc = switchLang === 'en' ? usaImage : georgiaImage;
  const changedLangAlt = switchLang === 'en' ? 'USA flag' : 'Georgia flag';

  return (
    <div
      onClick={openSwitchLanguage}
      className="flex cursor-pointer items-center gap-x-1 rounded-md bg-[#00000031] text-sm lg:text-[18px] px-3 py-2"
    >
      <span>{changedLang}</span>
      <img className="h-3 w-3 lg:h-4 lg:w-4" src={changedLangSrc} alt={changedLangAlt} />
    </div>
  );
};

export default CurrentLang;
