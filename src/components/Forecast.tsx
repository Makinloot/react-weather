import Details from "./Details";
import astroIcon from "../images/sunrise.png";
import termoIcon from "../images/termo.png";

import { IWeather } from "../api";

const Forecast: React.FC<{ data: IWeather; tempValue: boolean }> = ({
  data,
  tempValue,
}): JSX.Element | null => {
  const uniqueKey = () => {
    return Math.random() * Math.random() * Math.random();
  };

  if (data && data.forecast) {
    const { forecastday } = data.forecast;

    return (
      <div className="Forecast">
        <div className="Forecast-wrapper flex-col">
          {forecastday &&
            forecastday.map((item, i) => {
              let fulldate = new Date();
              fulldate.setDate(fulldate.getDate() + i);
              const currDay = fulldate.toLocaleString("en-us", {
                weekday: "long",
              });
              const { text, icon } = item.day.condition;
              const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } = item.day;

              return (
                <div className="Forecast-item" key={uniqueKey()}>
                  <strong>{currDay}</strong>
                  <img src={icon} alt={text} />
                  <div className="Forecast-minMax flex-row">
                    <strong className="max">H: {tempValue ? Math.floor(maxtemp_c) : Math.floor(maxtemp_f)}</strong>
                    <strong className="max">L: {tempValue ? Math.floor(mintemp_c) : Math.floor(mintemp_f)}</strong>
                  </div>
                </div>
              );
            })}
        </div>
        {forecastday && (
          <>
            <Details
              className="Forecast-astro"
              icon={astroIcon}
              title="sunrise"
              primary={forecastday[0].astro.sunrise}
              secondary={`${forecastday[0].astro.sunset} sunset`}
              astroAnim={true}
              day={data.current.is_day}
            />
            <Details
              className="Forecast-feelsLike"
              icon={termoIcon}
              title="feels like"
              // primary={`${Math.floor(Number(data.current.feelslike_c))}°`}
              primary={`${tempValue ? Math.floor(Number(data.current.feelslike_c)) : Math.floor(data.current.feelslike_f)}°`}
              secondary={`wind ${data.current.wind_kph} k/ph`}
            />
          </>
        )}
      </div>
    );
  }

  return null;
};

export default Forecast;
