import Image from "next/image";
import BurgerImage from "../../public/sk-uVPV_nV17Tw-unsplash.jpg";

const Home = () => {
  return (
    <div>
      <Image src={BurgerImage} alt="Burger Image" />
    </div>
  );
};
export default Home;
