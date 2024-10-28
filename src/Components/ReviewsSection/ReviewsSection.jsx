import React from 'react'
import reviews from "../../assets/Data/reviews.json";
import stars from "../../assets/images/icons/stars.svg";
import './ReviewsSection.css';

export default function ReviewsSection() {
  return (
    <div class="reviews-section one-screen-section section-space">
      <h2>
        MIDA <span class="red-text">OSALEJAD </span>ÜTLEVAD
      </h2>


      <div class="reviews">
        {reviews.map((review, index) => {
          return (
            <div class="review-container">
              <div class="review-image">
                <img
                  src={require(`../../assets/images/${review.image}`)}
                  alt={review.alt}
                />
              </div>
              <img src={stars} alt="stars" style={{ width: "110px" }} />
              <p>{review.description}</p>
              <p>{review.name}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
