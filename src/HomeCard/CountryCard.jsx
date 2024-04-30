/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
  const { _id } = countries;

  return (
    <>
      {countries.map((c) => (
        <Link
          to="/allTouristSpot"
          // to={`/viewDetails/${_id}`}
          key={c._id}
          className="card  shadow-2xl image-full  transition border-2 hover:scale-105 "
        >
          <figure>
            <img src={c.image} alt="Shoes" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title text-5xl">{c.country}</h2>
            <p>{c.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CountryCard;
