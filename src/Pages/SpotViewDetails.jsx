import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";

const SpotViewDetails = () => {
  const navigate = useNavigate();
  const loadedSpot = useLoaderData();

  return (
    <div className=" container mx-auto my-10">
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={loadedSpot?.photoUrl} className=" h-full" alt="image" />
        </figure>
        <div className="card-body bg-slate-200">
          <h1 className="card-title text-2xl font-bold flex justify-center mt-0 border-green-400 border-2">
            {loadedSpot?.country}
          </h1>
          <h1 className="card-title">{loadedSpot?.spotName}!</h1>
          <h2 className=" text-xl font-medium underline">Description:</h2>
          <p>{loadedSpot?.description}</p>

          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline">{loadedSpot?.time}</div>
            <div className="badge badge-outline">{loadedSpot?.cost}</div>
          </div>
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline">{loadedSpot?.seasonality}</div>
            <div className="badge badge-outline">{loadedSpot?.visit}</div>
          </div>
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline">
              <FaLocationDot />
              {loadedSpot?.location}
            </div>
          </div>

          <div className="card-actions justify-end">
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
      </div>
    </div>
  );
};

export default SpotViewDetails;
