import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <ul className="flex cursor-pointer gap-x-3 text-2xl *:mb-3 lg:text-4xl">
      <li className="text-blue-600">
        <FaFacebookSquare />
      </li>
      <li className="text-pink-400">
        <FaSquareInstagram />
      </li>
      <li className="text-blue-400">
        <FaLinkedin />
      </li>
      <li className="text-blue-300">
        <FaTwitterSquare />
      </li>
    </ul>
  );
};

export default SocialIcons;
