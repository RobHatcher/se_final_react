export const APIkey="28d898fcf3ef4c1d91cb0e68b6a55016";

export const newsApiBaseUrl = process.env.NODE_ENV === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";