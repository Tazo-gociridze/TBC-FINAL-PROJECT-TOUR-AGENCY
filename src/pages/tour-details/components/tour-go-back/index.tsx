import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TourGoBack = () => {
  return (
    <Link className="mt-16 self-start text-4xl text-gray-800 dark:text-gray-50" to={'/tours'}>
      <h1>
        <FaArrowLeft />
      </h1>
    </Link>
  );
};

export default TourGoBack;
