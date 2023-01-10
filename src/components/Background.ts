import  Helmet  from 'react-helmet';
import cloudy from "../images/day/cloudy.jpg";
import heavyRain from "../images/day/heavy_rain.jpg";
import heavySnow from "../images/day/heavy_snow.jpg";
import lightRain from "../images/day/light_rain.jpg";
import lightSnow from "../images/day/light_snow.jpg";
import lightThunder from "../images/day/light_thunder.jpg";
import mist from "../images/day/mist.jpg";
import sunny from "../images/day/sunny.jpg";
import thunderyOutbreak from "../images/day/thundery_outbreak.jpg";
import clear from "../images/night/clear.jpg";
import cloudyNight from "../images/night/cloudy.jpg";
import heavyRainNight from "../images/night/heavy_rain.jpg";
import lightRainNight from "../images/night/light_rain.jpg";
import lightSnowNight from "../images/night/light_snow.jpg";
import mistNight from "../images/night/mist.jpg";
import thunderyOutbreakNight from "../images/night/thundery_outbreak.jpg";

// change body background image depending on weather condition and daytime
export default function changeBG(bg: string) {
  const bgIdDay: string = bg.split('/')[5];
  const bgId: number = Number(bg.split('/')[6].split('.')[0])

  if(bgId === 113) {
    // sunny / clear
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${sunny})`
    else document.body.style.backgroundImage = `url(${clear})`
  } else if (bgId >= 116 && bgId <= 122) {
    // CLOUDY
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${clear})`
    else document.body.style.backgroundImage = `url(${cloudyNight})`
  } else if (bgId === 143 || bgId === 248 || bgId === 260) {
    // mist
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${mist})`
    else document.body.style.backgroundImage = `url(${mistNight})`
  } else if (bgId === 176 || bgId === 185 || bgId === 311 || bgId === 353 || (bgId >= 263 && bgId <= 284) || (bgId >= 293 && bgId <= 302) || (bgId >= 317 && bgId <= 320)) {
    // light/medium rain
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${lightRain})`
    else document.body.style.backgroundImage = `url(${lightRainNight})`
  } else if (bgId === 182 || bgId === 314 || bgId === 350 || (bgId >= 305 && bgId <= 308) || (bgId >= 356 && bgId <= 359) || (bgId >= 374 && bgId <= 377)) {
    // heavy rain
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${heavyRain})`
    else document.body.style.backgroundImage = `url(${heavyRainNight})`
  } else if (bgId === 386 || bgId === 389) {
    // background image rain with thunder
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${lightThunder})`
    else  document.body.style.backgroundImage = `url(${lightRainNight})`
  } else if (bgId === 200) {
    // thundery outbreak image
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${thunderyOutbreak})`
    else document.body.style.backgroundImage = `url(${thunderyOutbreakNight})`
  } else if (bgId === 179 || (bgId >= 323 && bgId <= 329) || (bgId >= 362 && bgId <= 368) || bgId === 392) {
    // light snow
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${lightSnow})`
    else document.body.style.backgroundImage = `url(${lightSnowNight})`
  } else if ((bgId >= 227 && bgId <= 330) || (bgId >= 332 && bgId <= 338) || bgId === 371 || bgId === 395) {
    // heavy snow
    if (bgIdDay === "day") document.body.style.backgroundImage = `url(${heavySnow})`
    else  document.body.style.backgroundImage = `url(${heavyRainNight})`
  }
  
}