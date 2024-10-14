import { useEffect, useState, memo } from "react";
import banner from "../../data/banner";
import classNames from "classnames/bind";
import style from "./Home.module.scss";

import {
  SpringGarden,
  Street,
  SummnerSea,
  Snow,
  CoffeNight,
  NightJapan,
} from "../../layout/HomeInterFace";

import { Header, Sidebar, CurrentSong, Playing } from "../../layout";
import { useSelector } from "react-redux";

const cx = classNames.bind(style);

const Home = () => {
  const [idBanner, setIdBanner] = useState(null);
  const { typeDisplay } = useSelector((store) => store.app);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const image_banner = banner?.find(
      (item) => item.sectionType === typeDisplay
    );

    setIdBanner(image_banner);

    let time = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(time);
  }, [typeDisplay]);

  return (
    <div className={cx("wrapper")}>
      {loading && (
        <div className={cx("loading_wrapper")}>
          <span className={cx("loader")}></span>
        </div>
      )}
      <div className={cx("top")}>
        <div className={cx("current-song")}>
          <CurrentSong />
        </div>
        <div className={cx("header")}>
          <Header />
        </div>
      </div>

      <div className={cx("content")}>
        {typeDisplay === "spring_garden" && (
          <SpringGarden video={idBanner?.video} />
        )}
        {typeDisplay === "street" && <Street video={idBanner?.video} />}
        {typeDisplay === "summer_sea" && <SummnerSea video={idBanner?.video} />}
        {typeDisplay === "snow" && <Snow video={idBanner?.video} />}
        {typeDisplay === "coffe_night" && (
          <CoffeNight video={idBanner?.video} />
        )}
        {typeDisplay === "night_japan" && (
          <NightJapan video={idBanner?.video} />
        )}
      </div>

      <div className={cx("play-controls")}>
        <Playing />
      </div>
      <div className={cx("sidebar")}>
        <Sidebar />
      </div>
    </div>
  );
};

export default memo(Home);

