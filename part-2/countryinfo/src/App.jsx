import { useEffect, useState } from "react";
import axios from "axios";
import Lists from "../src/components/Lists";

const App = () => {
  const base_url = "https://studies.cs.helsinki.fi/restcountries/api/all";

  const [searchQuery, setSearchQuery] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get(base_url)
      .then((res) => {
        setAllCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData([]);
      return;
    }
    const tempData = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(tempData);
  }, [searchQuery]);

  return (
    <>
      <>
        find countries{" "}
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </>
      {filteredData.length > 0 && <Lists filteredData={filteredData} />}
    </>
  );
};

export default App;
