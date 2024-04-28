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
      <h1>
        Home Spots:
        {spots.length}
      </h1>
      {/* <h1>Location: {spots?.location}</h1> */}

      <div>
        {spots.map((sp) => {
          return <HomeCard key={sp._id} sp={sp}></HomeCard>;
        })}
      </div>
    </div>
  );
};

export default HomeSpots;
