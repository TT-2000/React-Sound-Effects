import banner4 from "../assets/banner/snow/snow.png";
import banner3 from "../assets/banner/springGarden/springGarden.png";
import banner1 from "../assets/banner/street/street.png";
import banner2 from "../assets/banner/summerSea/SummerSea.png";
import banner5 from "../assets/banner/coffeNight/coffechill.png";
import banner6 from "../assets/banner/nightJapan/night_japan.png";

import video4 from "../assets/banner/snow/snow.mp4";
import video3 from "../assets/banner/springGarden/springGarden.mp4";
import video1 from "../assets/banner/street/street.mp4";
import video2 from "../assets/banner/summerSea/SummerSea.mp4";
import video5 from "../assets/banner/coffeNight/coffechill.gif";
import video6 from "../assets/banner/nightJapan/night_japan.mp4";

const banner = [
  {
    image: banner1,
    video: video1,
    title: "Street",
    sectionType: "street",
    id: 1,
    sound: ["rain", "bird", "sunny"],
  },
  {
    image: banner2,
    video: video2,
    title: "Summer sea",
    sectionType: "summer_sea",
    id: 2,
    sound: ["sunny", "bird", "wind", "wave"],
  },
  {
    image: banner3,
    video: video3,
    title: "Spring garden",
    sectionType: "spring_garden",
    id: 3,
    sound: ["rain", "bird", "sunny"],
  },
  {
    image: banner4,
    video: video4,
    title: "Snow",
    sectionType: "snow",
    id: 4,
    sound: ["snow", "wind", "talking", "fireplace"],
  },
  {
    image: banner5,
    video: video5,
    title: "Coffee Night",
    sectionType: "coffe_night",
    id: 5,
    sound: ["talking", "rain"],
  },
  {
    image: banner6,
    video: video6,
    title: "Japanese at night",
    sectionType: "night_japan",
    id: 6,
    sound: ["night", "rain", "wind"],
  },
];

export default banner;
