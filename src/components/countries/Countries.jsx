import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCoutries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCoutries(data));
  }, []);
  return (
    <div>
      <h3>Countries {countries.length}</h3>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
