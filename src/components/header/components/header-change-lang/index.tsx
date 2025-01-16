import useHeaderLogic from '../../hooks/useHeaderLogic';
import ChangeLangWindow from './components/change-lang-window';
import CurrentLang from './components/current-lang';

const HeaderChangeLang = () => {
  const { isSwitchLang, switchLang, switchLangHandler, openSwitchLanguage, switchLangRef } =
    useHeaderLogic();

  return (
    <div className="relative" ref={switchLangRef}>
      <CurrentLang openSwitchLanguage={openSwitchLanguage} switchLang={switchLang} />
      <ChangeLangWindow
        isSwitchLang={isSwitchLang}
        switchLangHandler={switchLangHandler}
        switchLang={switchLang}
      />
    </div>
  );
};

export default HeaderChangeLang;
