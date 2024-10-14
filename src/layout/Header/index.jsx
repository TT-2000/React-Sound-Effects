
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import icons from "../../utils/icons";

import classNames from "classnames/bind";
import style from "./Header.module.scss";

const cx = classNames.bind(style);
const {
  TbSettingsFilled,
  RxExitFullScreen,
  RxEnterFullScreen,
  BiSolidVolumeFull,
  BiSolidVolumeMute,
} = icons;

const Header = () => {
  const dispatch = useDispatch();
  const { isScreen, isVolume } = useSelector((store) => store.app);

  const handleClickScreen = () => {
    if (isScreen) {
      dispatch(actions.screen(false));
    } else {
      dispatch(actions.screen(true));
    }
  };

  const handleClickVolume = () => {
    if (isVolume) {
      dispatch(actions.setVolume(false));
    } else {
      dispatch(actions.setVolume(true));
    }
  };

  return (
    <div className={cx("wrapper")}>
      <button onClick={handleClickVolume}>
        {isVolume ? <BiSolidVolumeMute /> : <BiSolidVolumeFull />}
      </button>
      <button className={cx("screen-full")} onClick={handleClickScreen}>
        {isScreen ? <RxEnterFullScreen /> : <RxExitFullScreen />}
      </button>
      <button className={cx("setting")}>
        <TbSettingsFilled />
      </button>
    </div>
  );
};

export default Header;
