import { useState, useRef } from "react";
import { useFetch } from "../hooks/useFetch";

import Loading from "./Loading";
import Error from "./Error";
import Header from "./Header";
import WeatherHourly from "./WeatherHourly";
import Forecast from "./Forecast";
import Map from "./Map";
import changeBG from "./Background";
import ChangeTemp from "./ChangeTemp";
import { IWeather } from "../api";

const Weather: React.FC<{ weatherKey: string; coords: string }> = ({
  weatherKey,
  coords,
}): JSX.Element | null => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${coords && coords}&days=3&aqi=yes`;
  const [data, error, loading] = useFetch(url);
  const [switchTempValue, setSwitchTempValue] = useState<boolean>(true);

  const celsiusToF = (): void => {
    const tempInput = document.getElementById("temp-input");
    if (tempInput.checked) setSwitchTempValue(false);
    else setSwitchTempValue(true);
  }

  if (error) return <Error />;
  else if (loading) return <Loading />;
  else if (data) {
    if (data.current) {
      changeBG(data.current.condition.icon);
    }

    return (
      <>
        <ChangeTemp handleTemp={celsiusToF} />
        <Header data={data} tempValue={switchTempValue} />
        <WeatherHourly data={data} tempValue={switchTempValue} />
        <Forecast data={data} tempValue={switchTempValue} />
        <Map data={data} coords={coords} />
      </>
    );
  }

  return null;
};

export default Weather;
