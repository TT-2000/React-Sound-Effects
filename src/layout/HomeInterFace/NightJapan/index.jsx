import style from "./NightJapan.module.scss";
import classNames from "classnames/bind";
import Rain from "../../../conponents/Rain";
import { useSelector } from "react-redux";
import PropType from "prop-types"

const cx = classNames.bind(style);

const Snow = ({ video }) => {
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

Snow.propTypes = {
  video: PropType.any
}

export default Snow;
