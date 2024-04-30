import { useLoaderData, useNavigate } from "react-router-dom";
import MyCountrySpotCard from "../Components/MyCountrySpotCard";
import { useState } from "react";

const MyCountry = () => {
  const navigate = useNavigate();
  const loadedMyCountrySpot = useLoaderData();
  const [myCountrySpot, setMyCountrySpot] = useState(loadedMyCountrySpot);
  console.log(setMyCountrySpot);

  //   useEffect(() => {
  //     fetch(
  //       `https://southeast-asia-server.vercel.app/spots/${loadedMyCountrySpot?.country}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMyCountrySpot(data);
  //       });
  //   }, [loadedMyCountrySpot]);

  return (
    <div>
      <h1 className=" flex justify-center pt-16 text-5xl font-bold text-slate-600 font-serif">
        Countries Beautiful Spots
      </h1>
      {/* <MyCountrySpotCard></MyCountrySpotCard> */}
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {myCountrySpot.map((spot) => {
          return (
            <MyCountrySpotCard key={spot._id} spot={spot}></MyCountrySpotCard>
          );
        })}
      </div>

      {/* back to previous page btn */}
      <div className="card-actions justify-center pb-8">
        <button
          onClick={() => navigate(-1 || "/")}
          className="flex items-center justify-center w-1/2 px-5 py-1 transition-colors duration-200 bg-slate-400 font-serif hover:bg-base-200 border rounded-lg gap-x-2 sm:w-auto "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:rotate-180 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span className=" p-2">Back to Previous Page</span>
        </button>
      </div>
    </div>
  );
};

export default MyCountry;
