import React, { useState, useEffect } from "react";
import "./SavedNews.css";
import mockBookmarkService from "../../utils/mockBookmarkService";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
  const [savedArticles, setSavedArticles] = useState([]);
  const currentUser = { name: "John" }; 

  useEffect(() => {
    const fetchSavedArticles = () => {
      const articles = mockBookmarkService.getBookmarks();
      setSavedArticles(articles);
    };
    fetchSavedArticles();
  }, []);

  return (
    <main className="saved-news">
      <div className="saved-news__header">
        <h1 className="saved-news__title">Saved articles</h1>
        <p className="saved-news__greeting">
          {currentUser.name}, you have {savedArticles.length} saved articles
        </p>
        <p className="saved-news__keywords">
          By Keywords:{" "}
          <span className="saved-news__keywords-list">
            nature, pets, science
          </span>
        </p>
      </div>
      <div className="saved-news__container">
        {savedArticles.length === 0 ? (
          <p className="saved-news__empty">No saved articles yet</p>
        ) : (
          <div className="saved-news__grid">
            {savedArticles.map((article) => (
              <NewsCard
                key={article.url}
                article={article}
                isLoggedIn={true}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default SavedNews;
