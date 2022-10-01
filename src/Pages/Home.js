import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import "./Home.css";
const Home = () => {
  const [reviewLists, setReviewLists] = useState([]);

  // <-----------------------------------------Fetching Data------------->
  let reviewData = async () => {
    let review = await fetch("https://reqres.in/api/users?page");
    let respons = await review.json();
    setReviewLists(respons.data);
  };
  useEffect(() => {
    reviewData();
  }, []);
  
  // <-----------------------------------------Delete Review------------->
  const deleteReview = (reviewId) => {
    const reviewDataLists = [...reviewLists];
    let index = reviewLists.findIndex((review) => review.id === reviewId);
    reviewDataLists.splice(index, 1);
    setReviewLists(reviewDataLists);
  };

  return (
    <div className="home-container">
      <Banner />
      <div className="main-container">       
        <div className="custon-button">
          <Button />
        </div>{" "}
        <br />        
        <div className="home-right-container">
          <div className="home-review">
            <h3>Review</h3>
            {reviewLists.map((review) => {
              return (
                <div className="home-review-list" key={review.id}>
                  <img src={review.avatar} alt={review.first_name} />
                  <div className="home-list">
                    <h4>{review.first_name} 09/29/2022</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nihil atque quisquam omnis quibusdam minus. Tenetur harum
                      facilis, vitae quidem eligendi minima omnis error
                      aspernatur sequi beatae ad tempore, obcaecati sit?
                    </p>
                    <div className="review">
                      <div className="review-rating">
                        {Array(4)
                          .fill()
                          .map((_) => (
                            <p>⭐</p>
                          ))}
                      </div>
                      <div>
                        <button onClick={() => deleteReview(review)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {reviewLists.length === 0 && <h2>Cart is Empty !!</h2>}
          {/* <-----------------------------------------Your Order Checkout Page-------------> */}
          {reviewLists.length !== 0 && (
            <div className="home-order">
              <h3>Your Order</h3>
              <div className="order-price">
                <span>Lorem </span>
                <span>1*$20.20</span>
                <img className="delete-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAbFBMVEX/////AAD//Pz/PT3/WFj/39//YGD/0dH/9fX/u7v/p6f/Y2P/8PD/19f/tLT/Z2f/r6//bm7/f3//dnb/n5//UFD/XFz/mZn/e3v/Jib/zMz/xMT/EhL/j4//cnL/6en/Q0P/MTH/SUn/h4dbhYO7AAACkklEQVRoge3b6XaqMBQFYAJIEQfGyKiAvP87lqoEqEAGEu1w9r+bFfMJkpByD5rGFzuPgovrWpZ1Mm+xrJ2fxNs95zh8KZsCzcT9UKbq8az6lUuphi3xktomzVWwh5TCtvHewyJ0lM3uDRYWFbKvrgsTi1ClS2UzRhahWKo7upSxGyZBm6RNmPj+afTTy1xBDoNxz8/T1HYGEzuS6J77Yafn6OBqryS6BvVoBheAvGWrJKcxtef6uJQzIpL+521m++QKfuD+JG7nOzF8N970x3JgcAMF7sI1s9bNjp7nOaMEZMzYmYtH+uBvn/a8Y05dTLZITSjLJ/s6LBdmve3wp1461Yx3WZEUC1NBK5k2FWJZWsZUugtLzr9y83aCL2/M1yVol6Opfa6vjuwzcRtVN3X7pBO7zZe4/+x46wk3fJObvMA1ftDxxhjja1UZBlmzCmNdRgNV1RXjyzN7j67rmtN197/+KR7t2A10uo1Li9e76zJwWQIuuH/c3Xd5biHz0n5qIa7F9zXdrmXTtSCCkJasayKPXsizM3IAOwUueVBmdS1kAwcuuOCCCy644PK7ZJsg6JI/PFyNJfJdto0auOCCCy64P9w1wRVzZx8PjrKV7obggivPjX6Zi8EFF1zixoLuVZbLVikE7ovd6k2uweWe5LultbuH3KFss2vZdE3nRyeTfJPzWlcw73IbQbf+pW4i6KYrXV/QLVbWjJuC7srK3r6KmM3tq39XVecPXrNw2D5Rkw+gJs8+Hjkw5d43y7JoUDLHWPIuu1aV9f/N9Zo6FFc2dFLFAXPUYQf00ZiDOV5osHfS2Jr5LN9gWVWNBhfbXluRlBLOkP+tkc36AjSc0ZmJlF7jP96a44+bREun+BNiSUi6qjy9AgAAAABJRU5ErkJggg==" alt="Delete" />
              </div>
              <div>
                <p className="order-subprice">
                  <span>subprice</span>
                  <span>$12.00</span>
                </p>
                <p className="order-charge">
                  <span>Delivery Charge</span>
                  <span>$12.00</span>
                </p>
                <p className="order-wait">
                  <span>Wait</span>
                  <span>$12.00</span>
                </p>
                <p className="order-total">
                  <h4>Total</h4>
                  <h4>$66.68</h4>
                </p>
                <div className="order-actions">
                  <button>PROCESS TO CHECKOUT</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
