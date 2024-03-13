import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCoutries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCoutries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log(country);
    console.log("add this to your visited country");
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  return (
    <div>
      <h3>Countries {countries.length}</h3>
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul></ul>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
