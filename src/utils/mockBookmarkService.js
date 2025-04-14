const BOOKMARKS_KEY = 'saved-articles';

const mockBookmarkService = {
    // Get all bookmarks for current user
    getBookmarks: () => {
        const savedArticles = localStorage.getItem(BOOKMARKS_KEY);
        return savedArticles ? JSON.parse(savedArticles) : [];
    },

    // Save a new bookmark
    saveBookmark: (article) => {
        const currentBookmarks = mockBookmarkService.getBookmarks();
        // Add new article if it's not already saved
        if (!currentBookmarks.some(saved => saved.url === article.url)) {
            currentBookmarks.push(article);
            localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(currentBookmarks));
        }
        return currentBookmarks;
    },

    // Remove a bookmark
    removeBookmark: (articleUrl) => {
        const currentBookmarks = mockBookmarkService.getBookmarks();
        const updatedBookmarks = currentBookmarks.filter(article => article.url !== articleUrl);
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
    },

    // Check if an article is bookmarked
    isBookmarked: (articleUrl) => {
        const currentBookmarks = mockBookmarkService.getBookmarks();
        return currentBookmarks.some(article => article.url === articleUrl);
    }
};

export default mockBookmarkService;