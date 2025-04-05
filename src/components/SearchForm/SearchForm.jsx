import { useState } from 'react';
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-form__input"
                placeholder="Enter topic"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
            />
            <button type="submit" className="search-form__button">
                Search
            </button>
        </form>
    );
}

export default SearchForm;