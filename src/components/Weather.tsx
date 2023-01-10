import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";

import Header from "./Header";
import WeatherHourly from "./WeatherHourly";
import Forecast from "./Forecast";

const Weather: React.FC<{ weatherKey: string; coords: string | null}> = ({
  weatherKey,
  coords,
}):JSX.Element | null => {

  if(coords) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${coords}&days=3&aqi=yes`;
    const [data, error, loading] = useFetch(url);
    console.log(data)

    if(error) return <Error />
    else if(loading) return <Loading />
    else if(data) {
  
      return (
        <>
          <Header data={data} />
          <WeatherHourly data={data} />
          <Forecast data={data} />
        </>
      )
    }
  }



  return null
};

export default Weather;