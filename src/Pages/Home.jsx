import Carousel from "../Slider/Carousel";
import HomeSpots from "./../Components/HomeSpots";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <div className="container mx-auto my-10">
        <HomeSpots></HomeSpots>
      </div>
    </div>
  );
};

export default Home;
