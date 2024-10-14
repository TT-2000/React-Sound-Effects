import style from "./CoffeNight.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import Rain from "../../../conponents/Rain";
import PropType from "prop-types"

const cx = classNames.bind(style);

const CoffeNight = ({ video }) => {
  const { isRain } = useSelector((store) => store.app);
  return (
    <div className={cx("wrapper")}>
      {isRain && <Rain />}
      <img src={video} style={{ width: 100 + "%", height: 100 + "vh" }} />
    </div>
  );
};

CoffeNight.propTypes = {
  video: PropType.any
}

export default CoffeNight;
