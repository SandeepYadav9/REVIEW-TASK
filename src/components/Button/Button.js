import React from "react";
import "./Button.css";
const Button = () => {
  return (
    <div className="home-actions">
      <div className="action-menu">
        <button>MENU</button>
      </div>
      <div className="action-review">
        <button>REVIEW</button>
      </div>
      <div className="action-info">
        <button>INFO</button>
      </div>
    </div>
  );
};

export default Button;
