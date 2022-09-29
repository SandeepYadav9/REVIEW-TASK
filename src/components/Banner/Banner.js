import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-cards">
        <div className="banner-card-inner-name">
          <img
            className="city-image"
            src="https://media-cdn.tripadvisor.com/media/photo-s/15/33/fe/a2/new-delhi.jpg"
            alt="Banner"
          />
          <div className="overlay">
            <span>Behrouz Biryani (South Extension)</span> <br />
            <span>Biryani</span> <br />
            <div className="banner-review">
                    {Array(3)
                      .fill()
                      .map((_) => (
                        <p>⭐</p>
                      ))} (23)
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
