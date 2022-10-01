import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-cards">
        <div className="banner-card-inner-name">
          <img
            className="city-image"
            src="https://media-cdn.tripadvisor.com/media/photo-o/14/10/2e/af/india.jpg"
            alt="Banner"
          />
          <div className="overlay">
            <span>Behrouz Biryani (South Extension)</span> <br />
            <span>Biryani</span>  <br />
            <span>⭐⭐⭐⭐(23) </span>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
