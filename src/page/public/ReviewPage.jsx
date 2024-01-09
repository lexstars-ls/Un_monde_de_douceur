import React, { useEffect, useState } from "react";
import Header from "../../components/public/Header";

const ReviewPage = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      const reviewsResponse = await fetch("http://localhost:3001/api/reviews");

      const reviewsResponseData = await reviewsResponse.json();

      setReviews(reviewsResponseData);
    })();
  }, []);

  return (
    <>
      <Header />

      <h1>Liste des commentaires : </h1>

      {reviews ? (
        <>
          {reviews.map((review) => {
            return (
              <article>
                <p>{review.content}</p>
                <h4>{review.username}</h4>
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default ReviewPage;
