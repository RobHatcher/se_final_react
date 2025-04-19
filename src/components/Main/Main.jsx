import { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsSection from "../NewsSection/NewsSection";
import About from "../About/About";
// API 
import api from "../../utils/api";

function Main({isLoggedIn}) {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleSearchSubmit = async (searchQuery) => {
    setCurrentKeyword(searchQuery);
    setIsLoading(true);
    setSearchError("");
    try {
      const response = await api.getNews(searchQuery);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSearchResults(response.articles);
    } catch (error) {
      setSearchError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="main">
      <section className="main__container">
        <div className="main__content">
          <h1 className="main__title">What's going on in the world?</h1>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account
          </p>
          <SearchForm onSubmit={handleSearchSubmit} />
        </div>
      </section>

      <NewsSection 
            articles={searchResults}
            isLoading={isLoading}
            error={searchError}
            isLoggedIn={isLoggedIn}
            searchKeyword={currentKeyword}
        />

      <About />
    </main>
  );
}

export default Main;
