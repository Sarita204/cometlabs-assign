import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../images/img.jpg";
import Vedioimg from "../images/vedioimg.jpg";
import Img5 from "../images/img5.jpg";

function SliderPage() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 600,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    dots: true
  };
  return (
    <>
      <div className="background">
        <Slider {...settings}>
          <div>
            <p className="slider-text">
              <img src={Img} alt="logo" className="row-image-prop" />
            </p>
          </div>
          <div>
            <p className="slider-text">
              <img src={Vedioimg} alt="logo" className="row-image-prop" />
            </p>

            <br />
          </div>
          <div>
            <p className="slider-text">
              <img src={Img5} alt="logo" className="row-image-prop" />
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SliderPage;
