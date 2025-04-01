import { Bebas_Neue } from "next/font/google";
const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-6xl">Bebas Neue</h1>
      <p className={`${bebasFont.className}`}>This is random paragraph </p>
    </div>
  );
};
export default Home;
