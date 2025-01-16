import { Link } from "react-router-dom";
import useHeaderLogic from "../../hooks/useHeaderLogic";
import qs from "qs"

const HeaderLogo = () => {
  const {initialParams} = useHeaderLogic()

  const queryStr = qs.stringify(initialParams)

  return (
    <div>
      <Link to={`/?${queryStr}`}>
          <h1 className="cursor-pointer text-2xl text-white">Travel World</h1>
      </Link>
      
    </div>
  );
};

export default HeaderLogo;
