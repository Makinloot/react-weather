import React, { useState } from "react";
import sun from "../images/sun.png";
import moon from "../images/moon.png";

type TDetails = {
  className?: string;
  icon: string;
  title: string;
  primary: string;
  secondary: string;
  astroAnim?: boolean;
  day?: number;
}

const Details:React.FC<TDetails> = ({ icon, title, primary, secondary, astroAnim, day }) => {

  const [thumbLocation, setThumbLocation] = useState<number | string>('');

  let time = new Date().getHours();
  setTimeout(() => {
    const progressBarWidth = document.querySelector('.Details-progress-bar');
    if(progressBarWidth) {
      const { width } = progressBarWidth.getBoundingClientRect();
      let thumbToMove = (width / 24) * time;
      setThumbLocation(thumbToMove);
    }
  }, 10)


  return (
    <div className="Details">
      <div className="Details-title flex-row">
        <img src={icon} />
        <span>{title}</span>
      </div>
      <strong className="Details-primary">{primary}</strong>
      <span className="Details-secondary">{secondary}</span>
      {/* only for astro details (sunrise & sunset) */}
      {astroAnim &&
        <div className="Details-progress-bar">
          {day ? 
            <img src={sun} alt="sun" className="thumb" style={{
              left: thumbLocation
            }} /> : 
            <img src={moon} alt="moon" className="thumb" style={{
              left: thumbLocation
            }} />
          }
        </div>
      }
    </div>
  );
}

export default Details