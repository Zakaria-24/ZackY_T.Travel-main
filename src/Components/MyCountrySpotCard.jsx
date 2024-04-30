/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MyCountrySpotCard = ({ spot }) => {
  console.log(spot);
  const {
    _id,

    cost,
    country,
    description,

    location,

    photoUrl,
    seasonality,
    spotName,
  } = spot;

  return (
    <div>
      <div className="card  shadow-2xl space-y-2">
        <figure>
          <img className=" h-60" src={photoUrl} alt="Sundarban_image" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{country}!</h2>
            <h2 className="card-title">{spotName}!</h2>
          </div>
          <p>{description.slice(0, 70)}...</p>
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline">${cost}</div>
            <div className="badge badge-outline">{seasonality}</div>
            <div className="badge badge-outline">
              {location} visito per year
            </div>
          </div>
        </div>
        <Link to={`/viewDetails/${_id}`} className="btn bg-slate-500  w-full">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MyCountrySpotCard;
