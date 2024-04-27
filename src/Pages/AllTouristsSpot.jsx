import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpotCrad from "../Components/SpotCrad";

const AllTouristsSpot = () => {
  const allSpots = useLoaderData();
  const [spots, setSpots] = useState(allSpots);
  console.log(setSpots);
  return (
    <div className=" my-10">
      <h1>All Tourists Spot: {spots.length}</h1>
      <div className="container mx-auto">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn btn-outline m-1">
            Search...
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Average_Cost</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" container mx-auto grid grid-cols-3 ">
        {spots.map((spot) => (
          <SpotCrad key={spot._id} spot={spot}></SpotCrad>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
