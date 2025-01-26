import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <div>
      <Link to={`/`}>
        <div className="flex items-center gap-7">
          <div className="h-7 w-16 cursor-pointer bg-logo-bg bg-cover text-2xl text-white lg:h-14 lg:w-32"></div>
          <h1 className="hidden text-2xl text-white sm:hidden md:hidden lg:block xl:block 2xl:block">
            Travel World
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
