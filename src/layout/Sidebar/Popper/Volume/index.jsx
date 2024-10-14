import { useEffect, useState, memo } from "react";
import RangeVolume from "../../../../conponents/RangeVolume";
import classNames from "classnames/bind";
import style from "./Volume.module.scss";
import sound from "../../../../data/sound";
import { useSelector } from "react-redux";
import banner from "../../../../data/banner";
import icons from "../../../../utils/icons";
const { IoIosRefresh } = icons;
const cx = classNames.bind(style);

const Volume = () => {
  const { typeDisplay } = useSelector((store) => store.app);
  const [dataType, setDataType] = useState(null);
  const [mixMode, setMixMode] = useState(true);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const data = banner?.find(
      (item) => item.sectionType === typeDisplay
    )?.sound;

    if (data) {
      setDataType(data);
    }
    setMixMode(true);
  }, [typeDisplay]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("top")}>
        <h4>Âm thanh</h4>
        <button
          className={cx("refresh")}
          onClick={() => setRefresh((prev) => !prev)}
        >
          <IoIosRefresh />
          <span>refresh</span>
        </button>
      </div>
      <div className={cx("list-sound")}>
        <div className={cx("box")}>
          {sound?.map((item) => {
            if (!dataType?.includes(item.type)) return;
            return (
              <div className={cx("box-valume")} key={item.id}>
                <h5>{item.title}</h5>

                <span className={cx("adjust-bar")}>
                  <RangeVolume
                    icon={item.icons}
                    sound={item.sound}
                    type={item.type}
                    refresh={refresh}
                  />
                </span>
              </div>
            );
          })}
          {sound?.map((item) => {
            if (dataType?.includes(item.type)) return;
            return (
              <div
                className={cx("box-valume", {
                  active: mixMode,
                })}
                key={item.id}
              >
                <h5>{item.title}</h5>
                <span className={cx("adjust-bar")}>
                  <RangeVolume
                    icon={item.icons}
                    sound={item.sound}
                    type={item.type}
                    refresh={refresh}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div onClick={() => setMixMode((prev) => !prev)} className={cx("mix")}>
        Mix Mode
      </div>
    </div>
  );
};

export default memo(Volume);
