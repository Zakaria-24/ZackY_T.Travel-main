import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
// import HomeCard from "../HomeCard/HomeCard";

const HomeSpots = () => {
  const homeSpots = useLoaderData();
  console.log(homeSpots);
  const [spots, setSpots] = useState(homeSpots);
  console.log(setSpots);

  return (
    <div>
      <h1 className=" flex justify-center my-6 text-3xl font-bold">
        Tourist Spots
      </h1>
      {/* <h1>Location: {spots?.location}</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((sp) => {
          return <HomeCard key={sp._id} sp={sp}></HomeCard>;
        })}
      </div>
    </div>
  );
};

export default HomeSpots;
