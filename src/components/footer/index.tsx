import { GrContact } from 'react-icons/gr';
import { CiMail } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { IoPeopleSharp } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-96 w-full bg-[#0A2C00] dark:bg-[#161616] duration-300 px-32 ">
      <section className='flex justify-between items-center h-full py-10'>
        <div className="text-white self-start">
          <h2 className="mb-6 flex items-center gap-x-3 text-3xl text-gray-100">
            <span>Contacts</span>
            <span>
              <GrContact />
            </span>
          </h2>
          <ul className="text-xl *:mb-3">
            <li>
              <span className="flex items-center gap-x-3">
                <span className="text-xl font-bold text-blue-400">
                  <CiMail />
                </span>
                <span className="">travelworld@gmail.com</span>
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-3">
                <span className="text-xl font-bold text-blue-400">
                  <CiPhone />
                </span>
                <span>{'(+995) 599-99-99-99'}</span>
              </span>
            </li>
            <li>
              <span className="flex items-center gap-x-3">
                <span className="text-xl font-bold text-blue-400">
                  <CiLocationOn />
                </span>
                <span>chavchavadzis gamziri #76</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="text-white self-start">
          <h2 className="mb-6 flex items-center gap-x-3 text-3xl text-gray-100">
            <span>Social media</span>
            <span>
              <IoPeopleSharp />
            </span>
          </h2>
          <ul className="text-4xl *:mb-3 flex gap-x-3 cursor-pointer">
               <li className='text-blue-600'><FaFacebookSquare/></li>
               <li className='text-pink-400'><FaSquareInstagram/></li>
               <li className='text-blue-400'><FaLinkedin/></li>
               <li className='text-blue-300'><FaTwitterSquare/></li>
          </ul>
        </div>

        <div className="h-full w-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2978.3622780571127!2d44.7472225!3d41.7127008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473fe464810e7%3A0xc136d18dc571b6d3!2sChavchavadze%20av.%2039%20Tbilisi%2C%20Georgia%20Tbilisi%2C%200179!5e0!3m2!1sen!2sge!4v1737862562717!5m2!1sen!2sge"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
