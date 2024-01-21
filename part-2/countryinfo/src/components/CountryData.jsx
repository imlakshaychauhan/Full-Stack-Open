import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { apiKey } from "../utils";

const CountryData = ({ data }) => {
  const languages = [];
  for (const key in data.languages) languages.push(data.languages[key]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.capital[0].toLowerCase()}&appid=${apiKey}`;

  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios.get(url).then((res) => setWeatherData(res.data));
  }, [url]);

  return (
    <>
      {data && (
        <>
          <h2>{data.name.common}</h2>
          <p>capital {data.capital[0]}</p>
          <p>area {data.area}</p>
          <h3>languages: </h3>
          <ul>
            {languages.map((language, index) => {
              return <li key={index}>{language}</li>;
            })}
          </ul>
          <img src={data.flags.png} alt={data.flags.alt} />
          <h3>Weather in {data.capital[0]}</h3>
          <p>
            temperature {(weatherData?.main?.temp - 273.15).toFixed(2)} Celcius
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
            alt={`${weatherData?.weather[0]?.description}`}
          />
          <p>wind {weatherData?.wind?.speed} m/s</p>
        </>
      )}
    </>
  );
};

export default CountryData;
