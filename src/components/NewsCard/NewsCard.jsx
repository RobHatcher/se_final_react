import React, { useState, useEffect } from "react";
import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmark-icon.svg";
import bookmarkMarkedIcon from "../../assets/bookmark-marked.svg";
import mockBookmarkService from "../../utils/mockBookmarkService";

function NewsCard({ article, isLoggedIn }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {
    title = "No title available",
    publishedAt = new Date().toISOString(),
    description = "No description available",
    urlToImage = "https://placehold.co/600x400?text=No+Image",
    source = { name: "Unknown Source" },
    url = "#",
  } = article || {};

  const formatDate = (dateString) => {
    try {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (error) {
      return "Date unavailable";
    }
  };

  const handleBookmarkClick = () => {
    if (isLoggedIn) {
      if (isBookmarked) {
        // If already bookmarked, remove it
        mockBookmarkService.removeBookmark(url);
        setIsBookmarked(false);
      } else {
        // If not bookmarked, save it
        mockBookmarkService.saveBookmark(article);
        setIsBookmarked(true);
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const bookmarkStatus = mockBookmarkService.isBookmarked(url);
      setIsBookmarked(bookmarkStatus);
    }
  }, [url, isLoggedIn]);

  return (
    <article className="news-card">
      <div className="card__content">
        <div className="card__image-container">
          <button
            className={`card__bookmark-btn ${
              isBookmarked && isLoggedIn ? "card__bookmark-btn--active" : ""
            }`}
            onClick={handleBookmarkClick}
            title={!isLoggedIn ? "Please log in to save articles" : ""}
          >
            <img
              src={
                isBookmarked && isLoggedIn ? bookmarkMarkedIcon : bookmarkIcon
              }
              alt="bookmark"
              className="card__bookmark-icon"
            />
          </button>
          <img
            src={urlToImage}
            alt={title}
            className="card__image"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=No+Image";
            }}
          />
        </div>
        <div className="card__info">
          <time className="card__date">{formatDate(publishedAt)}</time>
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <p className="card__publisher">{source.name}</p>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
