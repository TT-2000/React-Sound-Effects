import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import icons from "../../utils/icons";
import classNames from "classnames/bind";
import style from "./CurrentSong.module.scss";
import ItemSong from "../../conponents/ItemSong";

import playlist from "../../data/playlist";

const cx = classNames.bind(style);
const { IoIosArrowUp } = icons;

const CurrentSong = () => {
  const { isPlaying, typePlaylist, currentSong } = useSelector(
    (store) => store.app
  );
  const [extend, setExtend] = useState(false);
  const [active, setActive] = useState(false);
  const [dataPlaylist, setDataPlaylist] = useState(null);
  const [background, setBackground] = useState();
  const [dataSong, setDataSong] = useState(null);

  const handleClickClose = (e) => {
    e.stopPropagation();
    if (active) {
      setActive((prev) => !prev);
    }
  };

  useEffect(() => {
    const dataSong = playlist
      ?.find((item) => item.sectionType === typePlaylist)
      ?.data?.find((item) => item.id === currentSong);

    if (dataSong) {
      setDataSong(dataSong);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  useEffect(() => {
    if (playlist) {
      const dataPlaylist = playlist?.find(
        (item) => item.sectionType === typePlaylist
      );

      setDataPlaylist(dataPlaylist);
      if (typePlaylist === "sleepy") {
        setBackground(
          "linear-gradient(182deg, rgb(66 79 156 / 86%), rgb(0 19 64 / 96%))"
        );
      } else if (typePlaylist === "chill") {
        setBackground(
          "linear-gradient(182deg, rgb(66 79 156 / 70%), rgb(9 0 70 / 93%))"
        );
      } else if (typePlaylist === "jazz") {
        setBackground(
          "linear-gradient(182deg, rgb(108 50 84 / 77%), rgb(76 33 33 / 81%))"
        );
      }
    }
  }, [typePlaylist]);

  const style = { background: active && background };
  return (
    <>
      {dataPlaylist && (
        <div
          className={cx("wrapper", {
            active: active,
          })}
          style={style}
          onClick={() => setActive(true)}
        >
          <div className={cx("top")}>
            <img
              className={cx("image", {
                active: !active && isPlaying,
              })}
              src={dataPlaylist?.banner}
              alt={dataPlaylist?.title}
            />
            <div className={cx("content")}>
              <div className={cx("current_song")}>
                <h4>{dataSong?.name}</h4>
                <span className={cx("artists")}>{dataSong?.artists}</span>
              </div>
              {!extend && (
                <div className={cx("playlist")}>
                  {dataPlaylist?.data?.map((item, index) => (
                    <ItemSong data={item} order={index + 1} key={index} />
                  ))}
                </div>
              )}
            </div>
            <span
              className={cx("show-all")}
              onClick={(e) => {
                e.stopPropagation();
                setExtend((prev) => !prev);
              }}
            >
              {!extend ? "mở rộng" : "thu gọn"}
            </span>
            {active && (
              <button className={cx("close")} onClick={handleClickClose}>
                <IoIosArrowUp />
              </button>
            )}
          </div>
          {extend && (
            <div className={cx("playlist-extend")}>
              <div className={cx("list-songs")}>
                {dataPlaylist?.data?.map((item, index) => (
                  <ItemSong data={item} order={index + 1} key={index} big />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CurrentSong;
