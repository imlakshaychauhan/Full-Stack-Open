import { useState } from "react";
import CountryData from "./CountryData";

const List = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <p>
        <>{country.name.common}</>
        <button onClick={() => setShow(!show)}>
          {show ? <>hide</> : <>show</>}
        </button>
      </p>
      {show && <CountryData data={country} />}
    </>
  );
};

export default List;
