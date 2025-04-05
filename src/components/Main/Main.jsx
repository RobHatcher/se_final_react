import { useState } from 'react';
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from '../NewsCard/NewsCard';
import About from '../About/About';

function Main() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchError, setSearchError] = useState('');

    const handleSearchSubmit = async (searchQuery) => {
        setIsLoading(true);
        setSearchError('');
        try {
            // Here you'll add your news API search logic
            // For now we'll leave it as a placeholder
            // setSearchResults(newsData);
        } catch (error) {
            setSearchError('Sorry, something went wrong during the request. Please try again later.');
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
                        Find the latest news on any topic and save them in your personal account
                    </p>
                    <SearchForm onSubmit={handleSearchSubmit} />
                </div>
            </section>

            {isLoading && <div className="loading">Searching for news...</div>}
            
            {searchError && <div className="search__error">{searchError}</div>}
            
            {searchResults.length > 0 && (
                <NewsCardList 
                    articles={searchResults}
                    // Add any other props needed for NewsCardList
                />
            )}

            <About />
        </main>
    );
}

export default Main;