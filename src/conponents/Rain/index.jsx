import { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import style from "./Rain.module.scss";


const cx = classNames.bind(style);

const Rain = () => {
  const rainWrapper = useRef();
  const numberDrop = 200;

  useEffect(() => {
    let drop;
    for (let i = 0; i < numberDrop; i++) {
      drop = document.createElement("span");

      drop.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      drop.style.animationDuration = 0.2 + Math.random() * 0.5 + "s";
      drop.style.animationDelay = Math.random() * 7 + "s";

      rainWrapper.current.appendChild(drop);
    }
  }, [numberDrop]);

  return <div ref={rainWrapper} className={cx("wrapper")}></div>;
};



export default Rain;
