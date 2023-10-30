import styles from "./style.module.css";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "./swiper.css";
import { useEffect, useRef } from "react";
import Icon from "../Icon/Icon";

const PostSlider = ({ items }) => {
  const ref = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(ref.current, {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 20,
      modules: [Navigation],
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const slides = items.map((story, i) => {
    return (
      <div className="swiper-slide" key={`slide-${i}`}>
        {story}
      </div>
    );
  });
  return (
    <>
      <div className={styles.navigation}>
        <button className={[styles.btn__prev, "prev"].join(" ")}>
          <Icon color={"#fff"} size={"28px"} name={"arrow-left-s-fill"} />
        </button>
        <button className={[styles.btn__next, "next"].join(" ")}>
          <Icon color={"white"} size={"28px"} name={"arrow-right-s-fill"} />
        </button>
      </div>

      <div
        ref={ref}
        style={{ overflow: "visible" }}
        className="swiper-container"
      >
        <div className="swiper-wrapper">{slides}</div>
      </div>
    </>
  );
};

export default PostSlider;
