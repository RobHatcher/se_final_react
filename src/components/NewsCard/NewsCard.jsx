import React, { useState, useEffect } from "react";
import "./NewsCard.css";
// Icon Imports
import bookmarkIcon from "../../assets/bookmark-icon.svg";
import bookmarkMarkedIcon from "../../assets/bookmark-marked.svg";
import trashIcon from "../../assets/trash.svg";
// Mock Service
import mockBookmarkService from "../../utils/mockBookmarkService";

function NewsCard({ article, isLoggedIn, keyword, isSaved, onArticleRemove, currentUser }) {
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
    if (isLoggedIn && currentUser) {
      if (isBookmarked) {
        mockBookmarkService.removeBookmark(url, currentUser._id);
        setIsBookmarked(false);
      } else {
        mockBookmarkService.saveBookmark(article, keyword, currentUser._id);
        setIsBookmarked(true);
      }
    }
  };

  const handleRemoveArticle = () => {
    if (isLoggedIn && currentUser) {
      mockBookmarkService.removeBookmark(url, currentUser._id);
      onArticleRemove();
    }
  };

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      const bookmarkStatus = mockBookmarkService.isBookmarked(url, currentUser._id);
      setIsBookmarked(bookmarkStatus);
    }
  }, [url, isLoggedIn, currentUser]);

  return (
    <article className="news-card">
      <div className="news-card__content">
        <div className="news-card__image-container">
          {isSaved && <span className="news-card__keyword">{keyword}</span>}
          {isSaved && (
            <button
              className="news-card__trash-btn"
              onClick={handleRemoveArticle}
              title="Remove article"
            >
              <span className="news-card__remove-tag">Remove from saved</span>
              <img
                src={trashIcon}
                alt="remove article"
                className="news-card__trash-icon"
              />
            </button>
          )}
          {!isSaved && (
            <button
              className={`news-card__bookmark-btn ${
                isBookmarked && isLoggedIn ? "news-card__bookmark-btn--active" : ""
              }`}
              onClick={handleBookmarkClick}
              title={!isLoggedIn ? "Please log in to save articles" : ""}
            >
              {!isLoggedIn && (
                <span className="news-card__bookmark-tag">
                  Sign in to save articles
                </span>
              )}
              <img
                src={
                  isBookmarked && isLoggedIn ? bookmarkMarkedIcon : bookmarkIcon
                }
                alt="bookmark"
                className="news-card__bookmark-icon"
              />
            </button>
          )}
          <img
            src={urlToImage}
            alt={title}
            className="news-card__image"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=No+Image";
            }}
          />
        </div>
        <div className="news-card__info">
          <time className="news-card__date">{formatDate(publishedAt)}</time>
          <h2 className="news-card__title">{title}</h2>
          <p className="news-card__description">{description}</p>
          <p className="news-card__publisher">{source.name}</p>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
