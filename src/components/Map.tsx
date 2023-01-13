import Details from "./Details";
import rainIcon from "../images/rain.png";
import airIcon from "../images/visibility.png";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IWeather } from "../api";

const Map: React.FC<{ data: IWeather; coords: any }> = ({
  data,
  coords,
}): JSX.Element | null => {
  if (data && data.current && data.forecast) {
    const { vis_km, vis_miles } = data.current;
    const { daily_chance_of_rain, daily_chance_of_snow } =
      data.forecast.forecastday[0].day;
    // TODO: when data air is avaliable check air quality and display it
    const splitCoords = coords.split(",");
    const coordTypeNumber: {
      lat: number;
      lon: number;
    } = {
      lat: Number(splitCoords[0]),
      lon: Number(splitCoords[1]),
    };
    return (
      <div className="Map">
        <div className="Map-wrapper">
          <MapContainer
            className="Map-item"
            center={[coordTypeNumber.lat, coordTypeNumber.lon]}
            zoom={10}
            scrollWheelZoom={true}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=CFeobN6xPyDyTCiFDnBQ"
            />
          </MapContainer>
        </div>
        {data && (
          <>
            <Details
              icon={rainIcon}
              title="rain"
              primary={`${daily_chance_of_rain}%`}
              secondary={`snow ${daily_chance_of_snow}%`}
            />
            <Details
              icon={airIcon}
              title="visibility"
              primary={`${vis_km} km`}
              secondary={`air: unavailable`}
            />
          </>
        )}
      </div>
    );
  }

  return null;
};

export default Map;
