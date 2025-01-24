import { Link } from 'react-router-dom';

const ConfirmationFooter = () => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span className="font-medium text-gray-500">Already confirmed?</span>
      <Link to={`/login`}>
        <span className="font-medium text-blue-600 hover:underline">Login</span>
      </Link>
    </div>
  );
};

export default ConfirmationFooter;
