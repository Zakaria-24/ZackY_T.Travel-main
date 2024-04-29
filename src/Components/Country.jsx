import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import CountryCard from "../HomeCard/CountryCard";
// import CountryCard from "../HomeCard/CountryCard";
// // import { Link } from "react-router-dom";

const Country = () => {
  const [countries, setCountries] = useState(null);
  //   const { country, image } = countries;
  //   console.log(countries);
  useEffect(() => {
    fetch(`https://southeast-asia-server.vercel.app/countries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  return (
    <>
      <>{countries && <CountryCard countries={countries}></CountryCard>}</>
    </>
  );
};

export default Country;
