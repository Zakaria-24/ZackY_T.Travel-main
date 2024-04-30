/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
  const { country } = countries;
  console.log(country);

  return (
    <>
      {countries.map((data) => (
        <Link
          to={`/country/${data.country}`}
          key={data._id}
          className="card  shadow-2xl image-full  transition border-2 hover:scale-105 "
        >
          <figure>
            <img src={data.image} alt="Shoes" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title text-5xl">{data.country}</h2>
            <p>{data.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CountryCard;
