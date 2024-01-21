import CountryData from "./CountryData.jsx";
import List from "./List.jsx";

const Lists = ({ filteredData }) => {
  if (filteredData.length === 1) {
    return <CountryData data={filteredData[0]} />;
  }
  return (
    <>
      {filteredData.length > 10 ? (
        <p> Too many matches, specify another filter</p>
      ) : (
        filteredData.map((country) => {
          return <List country={country} key={country.name.common} />;
        })
      )}
    </>
  );
};

export default Lists;
