import React, { useState, useEffect } from "react";
import "./SavedNews.css";

function SavedNews() {
  const [savedArticles, setSavedArticles] = useState([]);
  // You might want to get the currentUser from your context or props
  // This is just a placeholder - you'll need to connect it to your actual user data
  const currentUser = { name: "John" }; // Replace with actual user data

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
            {savedArticles.map((article, index) => (
              <article key={index} className="saved-news__card">
                {/* Article content will go here */}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default SavedNews;
