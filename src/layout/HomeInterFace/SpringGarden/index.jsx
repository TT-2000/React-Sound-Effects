import style from "./SpringGarden.module.scss";
import classNames from "classnames/bind";
import Rain from "../../../conponents/Rain";
import { useSelector } from "react-redux";
import PropType from "prop-types"

const cx = classNames.bind(style);

const SpringGarden = ({ video }) => {
  const { isRain } = useSelector((store) => store.app);

  return (
    <>
      {isRain && <Rain />}
      <div className={cx("wrapper")}>
        <video src={video} loop autoPlay></video>
      </div>
    </>
  );
};

SpringGarden.propTypes = {
  video: PropType.any
}

export default SpringGarden;
