import { useTranslation } from "react-i18next";

const Home = () => {
  const {t} = useTranslation("header")

  return (
    <>
      <div className="cover mb-[1000px] h-screen bg-main-background-2 dark:bg-main-background-1 transition-* duration-500 bg-fixed bg-bottom">
        <div className="h-full w-full bg-[#5234353f] dark:bg-[#000000b9] transition-colors duration-500">
          <h1 className="text-4xl pt-48 text-white">{t("navHome")}</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
