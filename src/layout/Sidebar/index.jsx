import PopperWrapper from "./Popper";
import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";
import icons from "../../utils/icons";

const cx = classNames.bind(style);
const { IoMdOptions, PiImagesLight, PiPlaylist } = icons;

const Sidebar = () => {
  return (
    <div className={cx("wrapper")}>
      <ul>
        <li className={cx("image")}>
          <PopperWrapper pid={1}>
            <span>
              <PiImagesLight />
            </span>
          </PopperWrapper>
        </li>
        <li className={cx("playlist")}>
          <PopperWrapper pid={2}>
            <span>
              <PiPlaylist />
            </span>
          </PopperWrapper>
        </li>
        <li className={cx("option_volumn")}>
          <PopperWrapper pid={3}>
            <span>
              <IoMdOptions />
            </span>
          </PopperWrapper>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
