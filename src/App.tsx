import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WEATHER_API_KEY } from "../settings.json";

import Weather from "./components/Weather";
import WeatherByLoc from "./components/WeatherByLoc";



function App(): JSX.Element {

  const [latlon, setLatlon] = useState<string | null>(null);

  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    const stringifyCoords: string = `${latitude},${longitude}`;
    setLatlon(stringifyCoords);
  })

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Weather weatherKey={WEATHER_API_KEY} coords={latlon} />} />
          <Route path="/:location" element={<WeatherByLoc weatherKey={WEATHER_API_KEY} coords={latlon} />} />
        </Routes>

      </div>
    </Router>
  );
}
// const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=3&aqi=yes`;

export default App;