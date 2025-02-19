import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section - Logo & Tagline (Spans Two Columns) */}
        <div className="flex flex-col  md:items-start md:col-span-2">
          <img src={logo} alt="Logo" className="w-24 h-24 mx-auto md:mx-0" />
          <p className="mt-2 text-sm text-gray-400">
            Students’ Association of Physics Department (SAPD) is a students’
            body recognized by Department of Physics, which undertakes
            responsibility of organizing informal events for all B.Tech, Dual
            Degree and MSc students. Our aim is to improve intra-department
            interaction among students and make their stay at IIT Bombay a
            joyful experience. Together with Department Council, SAPD tries to
            cover all the spheres of a student life at IIT Bombay.
          </p>
        </div>

        {/* Middle Section - Navigation Links (1 Column) */}
        <div className="flex flex-col gap-4 text-center items-center">
          <h3 className="text-lg font-semibold">Links</h3>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/activities" className="text-gray-300 hover:text-white">
            Activities
          </a>
          <a href="/blogs" className="text-gray-300 hover:text-white">
            Blogs
          </a>
          <a href="/members" className="text-gray-300 hover:text-white">
            Members
          </a>
        </div>

        {/* Right Section - Contact Info (1 Column) */}
        <div className="flex flex-col text-left ">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="mt-2 space-y-2 text-gray-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7538.969315295055!2d72.916626!3d19.130251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f419310ce7%3A0x9210cf89055309d2!2sDepartment%20of%20Physics%2C%20IIT%20Bombay!5e0!3m2!1sen!2sus!4v1739906651493!5m2!1sen!2sus"
              className="[width:12rem] [height:4rem]"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Department of Physics, IIT Bombay, Powai,
              Mumbai, Maharashtra 400076, India
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> contact@example.com
            </p>
            <p className="flex items-center gap-2">
              <FaInstagram />{" "}
              <a
                href="https://www.instagram.com/sapd_iitb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
