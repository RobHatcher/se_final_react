const getUserBookmarksKey = (userId) => `saved-articles-${userId}`;

const mockBookmarkService = {
    // Get all bookmarks for current user
    getBookmarks: (userId) => {
        if (!userId) return []; // Return empty array if no user
        const savedArticles = localStorage.getItem(getUserBookmarksKey(userId));
        return savedArticles ? JSON.parse(savedArticles) : [];
    },

    // Save a new bookmark
    saveBookmark: (article, keyword, userId) => {
        if (!userId) return []; // Don't save if no user
        const currentBookmarks = mockBookmarkService.getBookmarks(userId);
        if (!currentBookmarks.some(saved => saved.url === article.url)) {
            const articleWithKeyword = {
                ...article,
                keyword: keyword
            };
            currentBookmarks.push(articleWithKeyword);
            localStorage.setItem(getUserBookmarksKey(userId), JSON.stringify(currentBookmarks));
        }
        return currentBookmarks;
    },

    // Remove a bookmark
    removeBookmark: (articleUrl, userId) => {
        if (!userId) return [];
        const currentBookmarks = mockBookmarkService.getBookmarks(userId);
        const updatedBookmarks = currentBookmarks.filter(article => article.url !== articleUrl);
        localStorage.setItem(getUserBookmarksKey(userId), JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
    },

    // Check if an article is bookmarked
    isBookmarked: (articleUrl, userId) => {
        if (!userId) return false;
        const currentBookmarks = mockBookmarkService.getBookmarks(userId);
        return currentBookmarks.some(article => article.url === articleUrl);
    }
};

export default mockBookmarkService;