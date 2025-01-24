import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <div>
      <Link to={`/`}>
        <div className="flex items-center gap-7">
          <div className="h-14 w-32 cursor-pointer bg-logo-bg bg-cover text-2xl text-white"></div>
          <h1 className="text-2xl text-white">Travel World</h1>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
