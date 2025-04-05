import { Clock, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SongsList = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Songs are loading...");
    }, 4000)
  );
  const songs = [
    {
      id: 1,
      artist: "Dopesmoke",
      title: "(67) Dopesmoke - Smoking Kills",
      time: "2:19",
    },
    {
      id: 2,
      artist: "Fumez",
      title:
        "(Zone 2) Trizzac X Kwengface X Karma X LR - Plugged In W Fumez The Engineer",
      time: "4:11",
    },
    {
      id: 3,
      artist: "Joyner Lucas",
      title: "Best for me ",
      time: "2:19",
    },
    {
      id: 4,
      artist: "Laddskii",
      title: "#OFB Kash X Laddskii - Rumble Reload",
      time: "2:19",
    },
  ];
  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Songs Collection
      </h2>
      <ul className="space-y-4">
        {songs.map((song) => (
          <Link key={song.id} href={`/musics/${song.id}`}>
            <li
              key={song.id}
              className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 "
            >
              <div className="flex items-center gap-5">
                <Image
                  src="https://images.unsplash.com/photo-1742390003820-27d480d1c8ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="bg-gray-700 rounded-md flex-shrink-0"
                  width={64}
                  height={64}
                  alt="Rose"
                />
                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-sm text-gray-400">{song.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{song.time}</span>
                </div>

                <Heart
                  size={16}
                  className="cursor-pointer hover:text-red-500"
                />

                <button className="text-lg font-bold">⋮</button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default SongsList;
