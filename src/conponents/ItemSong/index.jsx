import { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import style from "./ItemSong.module.scss";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PropType from "prop-types"

const cx = classNames.bind(style);

const ItemSong = ({ data, order, big }) => {
  const dispatch = useDispatch();
  const { currentSong } = useSelector((store) => store.app);
  const song = useRef();
  const handleClickPlaying = () => {
    dispatch(actions.currentSong(data.id));

    dispatch(actions.play(true));
  };

  useEffect(() => {
    if (data?.id === currentSong) {
      song.current.scrollIntoView({
        dehavior: "smooth",
        block: big ? "center" : "start",
      });
    }
  }, [big, currentSong, data]);

  return (
    <div
      className={cx("wrapper", {
        active: data?.id === currentSong,
      })}
      ref={song}
      onClick={handleClickPlaying}
    >
      <div className={cx("left")}>
        <span className={cx("order")}>{`${order}.`}</span>
        <div className={cx("title")}>
          <h5 className={cx("name-song")}>{data?.name}</h5>
          <span className={cx("seperate")}>-</span>
          <span className={cx("artists")}>{data?.artists}</span>
        </div>
      </div>
      <div className={cx("right")}>
        <span className={cx("total-time")}>{data?.duration}</span>
      </div>
    </div>
  );
};

ItemSong.propTypes = {
  data: PropType.object,
  order: PropType.number,
  big: PropType.bool,
}

export default ItemSong;
