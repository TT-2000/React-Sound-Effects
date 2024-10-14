import style from "./Steet.module.scss";
import classNames from "classnames/bind";
import PropType from "prop-types"

const cx = classNames.bind(style);

const Street = ({ video }) => {
  return (
    <div className={cx("wrapper")}>
      <video src={video} loop autoPlay></video>
    </div>
  );
};

Street.propTypes = {
  video: PropType.any
}

export default Street;
