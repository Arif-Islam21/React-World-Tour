import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCoutries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCoutries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log(country);
    // console.log("add this to your visited country");
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlags = (flag) => {
    // console.log(flags);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  // REMOVE ITEM FROM AN ARRAY IN A STATE
  // USE FILTER TO SELECT ALL THE ELEMENT EXCEPT THE ONE YOU WANT TO REMOVE

  return (
    <div>
      <h3>Countries {countries.length}</h3>
      {/* DISPLAY VISITED COUNTRIES */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* DISPLAY COUNTRIES */}
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
