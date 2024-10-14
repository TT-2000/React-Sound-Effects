import { useState } from "react";

import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import style from "./Popper.module.scss";

import Playlist from "./Playlist";
import Image from "./Image";
import Volume from "./Volume";
import PropType from "prop-types"

const cx = classNames.bind(style);

const PopperWrapper = ({ children, pid }) => {
  const [showVolume, setShowVolume] = useState(false);
  const [popper, setPopper] = useState(false);
  const handleHideResult = () => {
    setPopper(false);
    setShowVolume(false);
  };
  const handleClickPopper = () => {
    setPopper(true);
    setShowVolume(true);
  };

  return (
    <HeadlessTippy
      interactive
      visible={pid === 3 ? true : popper}
      placement="left-start"
      render={(attrs) => (
        <div
          className={cx("wrapper", {
            volume: pid === 3 && !showVolume,
          })}
          tabIndex="-1"
          {...attrs}
        >
          {/* <div className={cx("content")}> */}
          {pid === 1 ? <Image /> : pid === 2 ? <Playlist /> : <Volume />}
          {/* </div> */}
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <span className={cx("button-item")} onClick={handleClickPopper}>
        {children}
      </span>
    </HeadlessTippy>
  );
};

PopperWrapper.propTypes = {
  children: PropType.any,
  pid: PropType.number,
}

export default PopperWrapper;
