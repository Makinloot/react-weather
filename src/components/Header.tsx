import { IWeather } from "../api";

const Header: React.FC<{ data: IWeather, tempValue: boolean }> = ({ data, tempValue }): JSX.Element | null => {
  if (data && data.location && data.current && data.forecast) {
    const { name } = data.location;
    const { temp_c, temp_f, condition } = data.current;
    const { text } = condition;
    const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } =
      data.forecast.forecastday[0].day;

    return (
      <div className="Header-wrapper flex-col">
        <strong className="Header-location">{name}</strong>
        <span className="Header-temp">
          {tempValue ? Math.floor(temp_c) : Math.floor(temp_f)}
          <span>&deg;</span>
        </span>
        <strong className="Header-condition">{text}</strong>
        <div className="Header-minMax flex-row">
          <strong className="max">
            H: {tempValue ? Math.floor(maxtemp_c) : Math.floor(maxtemp_f)}
            <span>&deg;</span>
          </strong>
          <strong className="min">
            L: {tempValue ? Math.floor(mintemp_c) : Math.floor(mintemp_f)}
            <span>&deg;</span>
          </strong>
        </div>
      </div>
    );
  }

  return null;
};

export default Header;
