import { memo } from "react";
import classNames from "classnames/bind";
import style from "./Playlist.module.scss";
import icons from "../../../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import RangeVolume from "../../../../conponents/RangeVolume";
import * as actions from "../../../../redux/actions";
import playlist from "../../../../data/playlist";
const cx = classNames.bind(style);
const { GiNightSleep, BsMusicPlayer, GiTrumpet, MdMusicNote } = icons;

const ItemPlaylist = [
  {
    id: 1,
    title: "Jazz",
    sectionType: "jazz",
    icon: <GiTrumpet />,
  },
  {
    id: 2,
    title: "Sleepy",
    sectionType: "sleepy",
    icon: <GiNightSleep />,
  },
  {
    id: 3,
    title: "Chill",
    sectionType: "chill",
    icon: <BsMusicPlayer />,
  },
];

const Playlist = () => {
  const { typePlaylist, currentSong } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const handleClickPlaylist = (type) => {
    const checkPlaylist = playlist?.find(
      (item) => item.sectionType === type
    )?.data;

    const checkSong = checkPlaylist?.find((item) => item.id === currentSong);

    if (!checkSong) {
      dispatch(actions.sectionTypePlaylist(type));
      dispatch(actions.currentSong(checkPlaylist[0]?.id));
      dispatch(actions.play(true));
    }
  };

  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>Tâm trạng</h4>
      <div className={cx("list-item")}>
        {ItemPlaylist?.map((item, index) => (
          <div
            className={cx("item-album", {
              active: item.sectionType === typePlaylist ? true : false,
            })}
            key={index}
            onClick={() => handleClickPlaylist(item.sectionType)}
          >
            <span className={cx("icon")}>{item.icon}</span>
            <span className={cx("title")}>{item.title}</span>
          </div>
        ))}
      </div>
      {typePlaylist && <h4 className={cx("title")}>Âm lượng</h4>}
      {typePlaylist && (
        <div className={cx("volume-song")}>
          <RangeVolume songs icon={<MdMusicNote />} />
        </div>
      )}
    </div>
  );
};

export default memo(Playlist);
