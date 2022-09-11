import React from 'react'

import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Sliders.css"

const Sliders = () => {
  const settings = {
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    autoplay:true,
  autoplaySpeed:1000,
  };
  return (
    <><div className='bg-success'>
      <div className='container'>

        <Slider {...settings}>
          <div class="item a"><h2>Hello</h2></div>
          <div class="item b">
            <h2>How are you today?</h2></div>
          <div class="item c">
            <h2>That is Interesting!</h2></div>
        </Slider >
      </div>
    </div>
    </>
  )
}

export default Sliders