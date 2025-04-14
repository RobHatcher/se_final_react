import React from "react";
import "./NewsSection.css";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import notFoundIcon from "../../assets/not-found_v1.svg";

const NewsSection = ({ articles, isLoading, error, isLoggedIn }) => {
  // If no search has been made yet, return null (no display)
  if (!articles && !isLoading && !error) {
    return null;
  }

  // Show loader while fetching
  if (isLoading) {
    return (
      <div className="news-section__not-found">
        <div className="preloader">
          <Preloader />
        </div>
      </div>
    );
  }

  // Show error message if there's an error
  if (error) {
    return (
      <div className="news-section__error">
        Sorry, something went wrong during the request. Please try again later.
      </div>
    );
  }

  // Show "Nothing found" message if no articles
  if (articles && articles.length === 0) {
    return (
      <div className="news-section__not-found">
        <img
          src={notFoundIcon}
          alt="Not Found"
          className="news-section__not-found-icon"
        />
        <h3 className="news-section__not-found-title">Nothing Found</h3>
        <p className="news-section__not-found-message">
          Sorry, but nothing matched your search terms
        </p>
      </div>
    );
  }

  return (
    <section className="news-section">
      <h2 className="news-section__results">Search Results</h2>
      <div className="news-section__cards">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} isLoggedIn={isLoggedIn} />
        ))}
      </div>
      <button className="show-more-button">Show more</button>
    </section>
  );
};

export default NewsSection;
