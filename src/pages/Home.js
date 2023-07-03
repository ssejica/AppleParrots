import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import promo from "./images/promo-image.jpg";
import item1 from "./images/item1.jpg";
import item2 from "./images/item2.jpg";
import item3 from "./images/item3.jpg";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="promo-image">
        <img src={promo} alt="promo-image" />
      </div>
      <div className="featured-items">
        <h2>Featured Items</h2>
        <Slider {...settings}>
          <div>
            <img src={item1} alt="Item1" />
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div>
            <img src={item2} alt="Item2" />
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div>
            <img src={item3} alt="Item3" />
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
