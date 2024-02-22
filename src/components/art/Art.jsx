import React from "react";
import "./art.css";
import paintingImg from "../../assets/painting.png";
import painting1 from "../../assets/artworks/p1.jpg";
import painting2 from "../../assets/artworks/p2.jpg";
import painting3 from "../../assets/artworks/p3.jpg";
import painting4 from "../../assets/artworks/p4.jpeg";

// core version + navigation, pagination modules:
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    painting: painting1,
    name: "BLUE MUSE - A SCARLET ODE",
  },
  {
    painting: painting2,
    name: "SUNFLOWER DREAMS",
  },
  {
    painting: painting3,
    name: "LOTUS ENCHANTMENT",
  },
  {
    painting: painting4,
    name: "MOONLIGHT",
  },
];
const art = () => {
  return (
    <section id="Art">
      <h5>Who am I outside of the coding world?</h5>
      <h2>My Artwork</h2>

      <div className="container">
        <Swiper
          className="paintings__containe mySwiper container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ painting, name, description }, index) => {
            return (
              <SwiperSlide key={index} className="painting">
                <div className="painting__img">
                  <img src={painting} alt="Painting1" />
                  <h2 className="painting__name">{name}</h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
      </div>
    </section>
  );
};

export default art;
