// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
// types
import { IWeather } from "../api";

const WeatherHourly: React.FC<{ data: IWeather }> = ({
  data,
}): JSX.Element | null => {
  const { width } = document.body.getBoundingClientRect();
  const initSlideView = new Date().getHours();

  const uniqueKey = () => {
    return Math.random() * Math.random() * Math.random();
  };

  if (data && data.forecast && data.forecast.forecastday) {
    const { hour } = data.forecast.forecastday[0];

    return (
      <>
        <Swiper
          slidesPerView={width > 340 ? 6 : 4}
          initialSlide={initSlideView}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper Swiper"
        >
          {hour &&
            hour.map((item) => {
              const { time, temp_c, temp_f, condition } = item;
              const { icon, text } = condition;

              return (
                <SwiperSlide className="Swiper-item flex-col" key={uniqueKey()}>
                  <span className="time">
                    {time.split(" ")[1].split(":")[0]}
                  </span>
                  <img src={icon} alt={text} className="icon" />
                  <strong className="temp">
                    {temp_c}
                    <span>&deg;</span>
                  </strong>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </>
    );
  }

  return null;
};

export default WeatherHourly;
