import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import Loading from "./Loading";
import Error from "./Error";
import Header from "./Header";
import WeatherHourly from "./WeatherHourly";
import Forecast from "./Forecast";
import Map from "./Map";
import changeBG from "./Background";
import ChangeTemp from "./ChangeTemp";
import SearchWeather from "./SearchWeather";

const WeatherByLoc: React.FC<{ weatherKey: string}> = ({
  weatherKey,
}) => {
  const { location } = useParams();
  const [switchTempValue, setSwitchTempValue] = useState<boolean>(true);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${location}&days=3&aqi=yes`;
  const [data, error, loading] = useFetch(url);

  const celsiusToF = (): void => {
    const tempInput: any = document.getElementById("temp-input");
    if (tempInput.checked) setSwitchTempValue(false);
    else setSwitchTempValue(true);
  };

  if (error) return <Error />;
  else if (loading) return <Loading />;
  else if (data.location) {
    if (data.current) {
      changeBG(data.current.condition.icon);
    }

    const { lat, lon } = data.location;
    const coords = `${lat},${lon}`

    return (
      <>
        <ChangeTemp handleTemp={celsiusToF} />
        <Header data={data} tempValue={switchTempValue} />
        <WeatherHourly data={data} tempValue={switchTempValue} />
        <Forecast data={data} tempValue={switchTempValue} />
        <Map data={data} coords={coords} />
        <SearchWeather />
      </>
    );
  }

  return null;
};

export default WeatherByLoc;
