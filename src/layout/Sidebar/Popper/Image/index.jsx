import { memo } from "react";
import classNames from "classnames/bind";
import style from "./Image.module.scss";
import banner from "../../../../data/banner";
import { useDispatch } from "react-redux";
import * as actions from "../../../../redux/actions";

const cx = classNames.bind(style);

const Image = () => {
  const dispatch = useDispatch();

  const handleClickScenery = (type) => {
    dispatch(actions.sectionTypeDisplay(type));
  };
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>Chủ đề nền</h4>
      {banner?.map((item, index) => (
        <div
          key={index}
          className={cx("item", {
            active: false,
          })}
          onClick={() => handleClickScenery(item.sectionType)}
        >
          <span className={cx("title")}>{item.title}</span>
          <div className={cx("image")}>
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Image);
