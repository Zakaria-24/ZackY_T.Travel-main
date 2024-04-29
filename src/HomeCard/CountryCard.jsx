/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CountryCard = ({ countries }) => {
  return (
    <>
      {countries.map((c) => (
        <Link
          to="/"
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

        // <div key={c._id} className="card card-side bg-base-100 shadow-xl">
        //   <figure>
        //     <img className="w-96 h-full" src={c.image} alt="country" />
        //   </figure>
        //   <div className="card-body">
        //     <h2 className="card-title">{c.country}!</h2>
        //     <p>{c.description.slice(0, 50)}...</p>
        //     <div className="card-actions justify-end">
        //       <Link className="btn btn-outline">View Details</Link>
        //     </div>
        //   </div>
        // </div>

        // <div
        //   key={c._id}
        //   className="hero w-[1000px] h-96  my-6 rounded-2xl "
        //   style={{
        //     backgroundImage:
        //       "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        //   }}
        // >
        //   <div className="hero-overlay bg-opacity-60"></div>
        //   <div className="hero-content text-center text-neutral-content">
        //     <div className="max-w-md">
        //       <h1 className="mb-5 text-5xl font-bold">{c.country}</h1>
        //       <p className="mb-5">{c.description}</p>
        //     </div>
        //   </div>
        // </div>
      ))}
    </>
  );
};

export default CountryCard;
