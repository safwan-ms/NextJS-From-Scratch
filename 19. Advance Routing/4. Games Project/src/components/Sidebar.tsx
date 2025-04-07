import Link from "next/link";
import { FaCog, FaGamepad, FaTrophy, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-5">Gaming Dashboard</h2>
      <div className="flex flex-col justify-between h-screen">
        <ul>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer"
          >
            <span className="mr-2">
              <FaGamepad />
            </span>
            Games
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer "
          >
            <span className="mr-2">
              <FaUser />
            </span>
            Profile
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer"
          >
            <span className="mr-2">
              <FaTrophy />
            </span>
            Achievements
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700
           rounded cursor-pointer"
          >
            <span className="mr-2">
              <FaCog />
            </span>
            Settings
          </li>
        </ul>

        <section className="mb-[7rem]">
          <Link className="text-2xl font-bold" href="/login">
            Login
          </Link>
        </section>
      </div>
    </div>
  );
};
export default Sidebar;
