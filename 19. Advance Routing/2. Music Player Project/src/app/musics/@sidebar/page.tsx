import { Clock, Home, TrendingUp } from "lucide-react";
import Image from "next/image";

const Sidebar = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 5000)
  );
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Clock
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="text-xl mt-6 font-bold">FAVORITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              <Image
                src="https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mountain"
                className=" bg-gray-700 rounded-md"
                width={60}
                height={60}
              />
              {/* <div>
                <p className="text-white">Random</p>
              </div> */}
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};
export default Sidebar;
