import georgiaImage from '@/images/Home/georgia.png';
import usaImage from '@/images/Home/united-states.png';
import { FC } from 'react';

interface ChangeLangWindowProps {
  switchLang: string;
  isSwitchLang: boolean;
  switchLangHandler: () => void;
}

const ChangeLangWindow: FC<ChangeLangWindowProps> = ({
  switchLang,
  isSwitchLang,
  switchLangHandler,
}) => {
  const NOT_SELECTED_LANG = switchLang === 'en' ? 'ქა' : 'En';
  const NOT_SELECTED_LANG_SRC = switchLang === 'en' ? georgiaImage : usaImage;
  const NOT_SELECTED_LANG_ALT = switchLang === 'en' ? 'USA flag' : 'Georgia flag';

  return (
    <>
      {isSwitchLang && (
        <div className="absolute top-12 rounded-md bg-[#000000] shadow-md">
          <div
            onClick={switchLangHandler}
            className="flex cursor-pointer items-center gap-x-1 rounded-md bg-[#252525] px-3 py-2"
          >
            <span>{NOT_SELECTED_LANG}</span>
            <img className="h-4 w-4" src={NOT_SELECTED_LANG_SRC} alt={NOT_SELECTED_LANG_ALT} />
          </div>
        </div>
      )}
    </>
  );
};

export default ChangeLangWindow;
