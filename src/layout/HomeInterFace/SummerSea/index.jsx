import style from "./SummerSea.module.scss";
import classNames from "classnames/bind";
import PropType from "prop-types"

const cx = classNames.bind(style);

const SummnerSea = ({ video }) => {
  return (
    <div className={cx("wrapper")}>
      <video src={video} loop autoPlay></video>
    </div>
  );
};

SummnerSea.propTypes = {
  video: PropType.any
}

export default SummnerSea;
