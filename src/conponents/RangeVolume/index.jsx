import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./RangeVolume.module.scss";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import PropType from "prop-types";

const cx = classNames.bind(style);

const RangeVolume = ({ icon, sound, type, refresh = false, songs = false }) => {
  const { isPlaying, typeDisplay, typePlaylist } = useSelector(
    (store) => store.app
  );
  const wrapperRange = useRef();
  const dispatch = useDispatch();
  const [handleMouse, setHandleMouse] = useState(false);
  const [value, setValue] = useState(0);
  const [valueVolume, setValueVolume] = useState(0);
  const thumb = useRef();
  const appearance = useRef();
  const control = useRef();
  const audioRef = control?.current?.audio.current;

  useEffect(() => {
    if (!songs) {
      thumb.current.style.left = 0 + "%";
      appearance.current.style.width = 0 + "%";
      setValue(0);
      setValueVolume(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeDisplay, refresh]);

  useEffect(() => {
    if (songs) {
      dispatch(actions.setValueVolume(0.5));
      thumb.current.style.left = 50 + "%";
      appearance.current.style.width = 50 + "%";
      setValueVolume(0.5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typePlaylist]);

  useEffect(() => {
    if (songs) {
      dispatch(actions.setValueVolume(valueVolume));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueVolume]);

  useEffect(() => {
    if (value > 0) {
      if (sound) {
        audioRef?.play();
        control.current.audio.current.volume = valueVolume;
      }
    } else {
      audioRef?.pause();
    }

    if (!handleMouse) {
      if (value > 0) {
        if (type === "rain") {
          dispatch(actions.rain(true));
        }
      } else {
        if (type === "rain") {
          dispatch(actions.rain(false));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, handleMouse]);

  const handleClickThumb = (e) => {
    e.stopPropagation();
    let sliderRect = wrapperRange.current.getBoundingClientRect();
    let posX = e.clientX - sliderRect.left;
    let width = Math.floor((posX / sliderRect?.width) * 100);
    let volume = Math.floor((posX / sliderRect?.width) * 100) / 100;

    if (width < 0 || volume <= 0) {
      width = 0;
    } else if (width >= 95) {
      width = 95;
    }

    thumb.current.style.left = width + "%";
    appearance.current.style.width = width + "%";
    setValue(width);
    setValueVolume(volume >= 0.95 ? 1 : volume <= 0 ? 0 : volume);
  };

  const onMouseDown = () => {
    setHandleMouse(true);
  };

  const onMouseUp = () => {
    setHandleMouse(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);

    const handleMouseMove = (e) => {
      e.stopPropagation();
      if (handleMouse) {
        let sliderRect = wrapperRange.current.getBoundingClientRect();
        let posX = e.clientX - sliderRect.left;
        let width = Math.floor((posX / sliderRect?.width) * 100);
        let volume = Math.floor((posX / sliderRect?.width) * 100) / 100;

        if (width < 0) {
          width = 0;
        } else if (width >= 95) {
          width = 95;
        }

        thumb.current.style.left = width + "%";
        appearance.current.style.width = width + "%";
        setValue(width);
        setValueVolume(volume >= 0.95 ? 1 : volume <= 0 ? 0 : volume);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [handleMouse]);

  const handleEnded = () => {
    if (sound) audioRef?.play();
  };

  return (
    <>
      <AudioPlayer
        onEnded={handleEnded}
        src={sound && sound}
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
      <div
        className={cx("wrapper", {
          active: handleMouse,
        })}
      >
        <div
          className={cx("bar")}
          ref={wrapperRange}
          onClick={handleClickThumb}
        ></div>

        <span ref={thumb} className={cx("thumb")} onMouseDown={onMouseDown}>
          {icon}
        </span>
        <span ref={appearance} className={cx("appearance")}></span>
      </div>
    </>
  );
};

RangeVolume.propTypes = {
  icon: PropType.any,
  sound: PropType.any,
  type: PropType.any,
  songs: PropType.any,
  refresh: PropType.any,
};

export default RangeVolume;
