import "./country.css";
const Country = ({ country }) => {
  const { name, flags } = country;
  return (
    <div className="country">
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
