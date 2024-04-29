import Country from "../Components/Country";
import Carousel from "../Slider/Carousel";
import HomeSpots from "./../Components/HomeSpots";

const Home = () => {
  return (
    <div className="bg-slate-300">
      <Carousel></Carousel>

      <div className="container mx-auto my-16">
        <HomeSpots></HomeSpots>
      </div>

      <div className="container mx-auto py-10 pb-20">
        <h1 className=" flex justify-center my-6  text-5xl font-bold text-slate-600 font-serif">
          Countries Historical Place:{}
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Country></Country>
        </div>
      </div>
    </div>
  );
};

export default Home;
