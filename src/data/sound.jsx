import rain from "../assets/sound/rain.mp3";
import snow from "../assets/sound/snow.mp3";
import bird from "../assets/sound/bird.mp3";
import wind from "../assets/sound/wind.mp3";
import sunny from "../assets/sound/sunny.mp3";

import wave from "../assets/sound/wave.mp3";
import talking from "../assets/sound/talking.mp3";
import fireplace from "../assets/sound/fireplace.mp3";
import night from "../assets/sound/night.mp3";

import icons from "../utils/icons";

const {
  PiWavesBold,
  IoRainy,
  PiBirdFill,
  IoSnowSharp,
  PiWindLight,
  IoPartlySunnySharp,

  RiKakaoTalkFill,
  IoMdBonfire,
  IoCloudyNightSharp,
} = icons;
const sound = [
  {
    id: "1",
    sound: rain,
    type: "rain",
    icons: <IoRainy />,
    title: "Mưa",
  },
  {
    id: "2",
    sound: snow,
    type: "snow",
    icons: <IoSnowSharp />,
    title: "Tuyết rơi",
  },
  {
    id: "3",
    sound: bird,
    type: "bird",
    icons: <PiBirdFill />,
    title: "Chim",
  },
  {
    id: "4",
    sound: wind,
    type: "wind",
    icons: <PiWindLight />,
    title: "Gió",
  },
  {
    id: "5",
    sound: sunny,
    type: "sunny",
    icons: <IoPartlySunnySharp />,
    title: "Nắng",
  },

  {
    id: "6",
    sound: wave,
    type: "wave",
    icons: <PiWavesBold />,
    title: "Sóng",
  },
  {
    id: "7",
    sound: talking,
    type: "talking",
    icons: <RiKakaoTalkFill />,
    title: "Tiếng ồn",
  },
  {
    id: "8",
    sound: fireplace,
    type: "fireplace",
    icons: <IoMdBonfire />,
    title: "Lò sưởi",
  },
  {
    id: "9",
    sound: night,
    type: "night",
    icons: <IoCloudyNightSharp />,
    title: "Ban đêm",
  },
];

export default sound;
