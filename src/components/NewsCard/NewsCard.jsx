import React, { useState, useEffect } from "react";
import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmark-icon.svg";
import bookmarkMarkedIcon from "../../assets/bookmark-marked.svg";
import mockBookmarkService from "../../utils/mockBookmarkService";
import trashIcon from "../../assets/trash.svg";

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
    console.log('Bookmark clicked');
    console.log('Current user:', currentUser);
    console.log('User ID being used:', currentUser.id);
    console.log('User _id from object:', currentUser._id);
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
      <div className="card__content">
        <div className="card__image-container">
          {isSaved && <span className="card__keyword">{keyword}</span>}
          {isSaved && (
            <button
              className="card__trash-btn"
              onClick={handleRemoveArticle}
              title="Remove article"
            >
              <span className="card__remove-tag">Remove from saved</span>
              <img
                src={trashIcon}
                alt="remove article"
                className="card__trash-icon"
              />
            </button>
          )}
          {!isSaved && (
            <button
              className={`card__bookmark-btn ${
                isBookmarked && isLoggedIn ? "card__bookmark-btn--active" : ""
              }`}
              onClick={handleBookmarkClick}
              title={!isLoggedIn ? "Please log in to save articles" : ""}
            >
              {!isLoggedIn && (
                <span className="card__bookmark-tag">
                  Sign in to save articles
                </span>
              )}
              <img
                src={
                  isBookmarked && isLoggedIn ? bookmarkMarkedIcon : bookmarkIcon
                }
                alt="bookmark"
                className="card__bookmark-icon"
              />
            </button>
          )}
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
