/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCard = ({ sp }) => {
  const { location, photoUrl, spotName, description } = sp;
  console.log(location);
  return (
    <div>
      <div>
        {/* <h1>{time}</h1> */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={photoUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{spotName}</h2>
            <p>{description.slice(0, 30)}</p>
            <div className="card-actions">
              <Link
                //   to="/viewDetails"
                //   to={`/viewDetails/${_id}`}
                className="btn btn-outline w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
