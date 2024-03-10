import { useState } from "react";
import "./country.css";
const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(true);
  };

  return (
    <div className="country">
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisit}>Visited</button>
      {visited && "I have visited this country"}
    </div>
  );
};

export default Country;
