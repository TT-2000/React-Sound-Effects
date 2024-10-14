import style from "./Snow.module.scss";
import classNames from "classnames/bind";
import PropType from "prop-types"

const cx = classNames.bind(style);

const Snow = ({ video }) => {
  return (
    <div className={cx("wrapper")}>
      <video src={video} loop autoPlay></video>
    </div>
  );
};

Snow.propTypes = {
  video: PropType.any
}

export default Snow;
