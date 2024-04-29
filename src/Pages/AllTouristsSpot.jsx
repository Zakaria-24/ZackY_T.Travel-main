import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpotCrad from "../Components/SpotCrad";

const AllTouristsSpot = () => {
  const allSpots = useLoaderData();
  // console.log(allSpots);
  const [spots, setSpots] = useState(allSpots);
  console.log(setSpots);
  return (
    <div className=" py-16 bg-slate-300">
      <div className="container mx-auto">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-slate-500 px-6 m-1 text-teal-400 font-serif"
          >
            Sort...
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-slate-500"
          >
            <li>
              <a>Average_Cost</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
        {spots.map((spot) => (
          <SpotCrad key={spot._id} spot={spot}></SpotCrad>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
