import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";

import Header from "./Header";

const Weather: React.FC<{ weatherKey: string; coords: string | null }> = ({
  weatherKey,
  coords,
}):JSX.Element | null => {

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=paris&days=3&aqi=yes`;
  const [data, error, loading] = useFetch(url);

  console.log(data)

  if(error) return <Error />
  else if(loading) return <Loading />
  else if(data) {

    return (
      <>
        <Header />
      </>
    )
  }

  return null
};

export default Weather;