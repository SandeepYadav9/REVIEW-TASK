import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [reviewLists, setReviewLists] = useState([]);
  let reviewData = async () => {
    let review = await fetch("https://reqres.in/api/users?page");
    let respons = await review.json();   
    setReviewLists(respons.data);
  };

  useEffect(() => {
    reviewData();
  }, []);

  const deleteReview = (reviewId) => {
    const reviewDataLists = [...reviewLists];
    let index = reviewLists.findIndex((review) => review.id === reviewId);
    reviewDataLists.splice(index, 1);
    setReviewLists(reviewDataLists);
  };

  return (
    <div className="home-container">
      <h3>Review</h3>
      <div className="home-review">
        {reviewLists.map((review) => {
          return (
            <div className="home-review-list" key={review.id}>
              <img src={review.avatar} alt={review.first_name} />
              <div className="home-list">
                <h4>{review.first_name} 09/29/2022</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil atque quisquam omnis quibusdam minus. Tenetur harum
                  facilis, vitae quidem eligendi minima omnis error aspernatur
                  sequi beatae ad tempore, obcaecati sit?
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
                    <button onClick={() => deleteReview(review)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
