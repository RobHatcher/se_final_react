import React, { useState, useEffect } from "react";
import "./SavedNews.css";
// other imports
import NewsCard from "../NewsCard/NewsCard";
// Mock Services
import { useAuth } from "../../utils/AuthContext";
import mockBookmarkService from "../../utils/mockBookmarkService";

function SavedNews() {
  const [savedArticles, setSavedArticles] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const { currentUser } = useAuth();

  const fetchSavedArticles = () => {
    const articles = mockBookmarkService.getBookmarks(currentUser?._id);
    setSavedArticles(articles);

    const uniqueKeywords = [
      ...new Set(
        articles.map((article) => article.keyword).filter((keyword) => keyword)
      ),
    ];
    setKeywords(uniqueKeywords);
  };

  useEffect(() => {
    if (currentUser) {
      fetchSavedArticles();
    }
  }, [currentUser]);

  return (
    <main className="saved-news">
      <div className="saved-news__header">
        <div className="saved-news__header-content">
          <h1 className="saved-news__title">Saved articles</h1>
          <p className="saved-news__greeting">
            {currentUser?.name}, you have {savedArticles.length} saved articles
          </p>
          <p className="saved-news__keywords">
            By Keywords:{" "}
            <span className="saved-news__keywords-list">
              {keywords.join(", ") || "No keywords yet"}
            </span>
          </p>
        </div>
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
                keyword={article.keyword}
                isSaved={true}
                onArticleRemove={fetchSavedArticles}
                currentUser={currentUser}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default SavedNews;
