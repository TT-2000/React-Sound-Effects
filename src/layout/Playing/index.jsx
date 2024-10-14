import { useEffect, useState, useRef, memo } from "react";
import icons from "../../utils/icons";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import AudioPlayer from "react-h5-audio-player";
import playlist from "../../data/playlist";
import classNames from "classnames/bind";
import style from "./Playing.module.scss";
import { songs } from "../../data/songs";

const cx = classNames.bind(style);
const { PiPlayLight, PiPauseThin, PiSkipBackLight, PiSkipForwardLight } = icons;

const Playing = () => {
  const dispatch = useDispatch();
  const { isPlaying, currentSong, typePlaylist, isValueVolume } = useSelector(
    (store) => store.app
  );
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState();
  const [dataPlaylist, setDataPlaylist] = useState([]);
  const control = useRef();
  const audioRef = control?.current?.audio.current;

  useEffect(() => {
    const data = playlist?.find((item) => item.sectionType === typePlaylist);

    if (data) {
      setDataPlaylist(data?.data);
    }
  }, [typePlaylist]);

  const handleClickPlaying = () => {
    if (currentSong)
      if (isPlaying) {
        dispatch(actions.play(false));
        setPlay(false);
      } else {
        dispatch(actions.play(true));
        setPlay(true);
      }
  };

  useEffect(() => {
    control.current.audio.current.load();
    control.current.audio.current.pause();
    control.current.audio.current.currentTime = 0;
    setPlay(false);
    const song = songs?.find((item) => item.id === currentSong);

    if (song) {
      audioRef?.pause();
      audioRef?.load();
      setAudio(song?.sound);
      setPlay(true);
    } else {
      audioRef?.pause();
      setAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  useEffect(() => {
    if (play && isPlaying) {
      audioRef?.play();
    } else if (!play && !isPlaying) {
      audioRef?.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, play]);

  const handleClickPrevSong = () => {
    if (dataPlaylist) {
      const index = dataPlaylist.findIndex((item) => item.id === currentSong);

      dispatch(
        actions.currentSong(dataPlaylist[index === 0 ? 0 : index - 1].id)
      );

      dispatch(actions.play(true));
    }
  };

  const handleClickNextSong = () => {
    if (dataPlaylist) {
      const length = dataPlaylist.length - 1;
      const index = dataPlaylist.findIndex((item) => item.id === currentSong);

      dispatch(
        actions.currentSong(dataPlaylist[index >= length ? 0 : index + 1].id)
      );

      dispatch(actions.play(true));
    }
  };

  const handleEnded = () => {
    handleClickNextSong();
  };

  useEffect(() => {
    control.current.audio.current.volume = isValueVolume;
  }, [isValueVolume]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("audio")}>
        <AudioPlayer
          onEnded={handleEnded}
          src={audio && audio}
          ref={control}
          customControlsSection={[]}
          autoPlay={false}
          autoPlayAfterSrcChange={isPlaying ? true : false}
          showJumpControls={false}
          layout="stacked-reverse"
          style={{
            height: "100%",
            display: "none",
          }}
        />
      </div>

      <button className={cx("btn-prev")} onClick={handleClickPrevSong}>
        <PiSkipBackLight />
      </button>
      <button className={cx("btn-playing")} onClick={handleClickPlaying}>
        {isPlaying ? <PiPauseThin /> : <PiPlayLight />}
      </button>
      <button className={cx("btn-next")} onClick={handleClickNextSong}>
        <PiSkipForwardLight />
      </button>
    </div>
  );
};

export default memo(Playing);
