import { APIkey, newsApiBaseUrl } from "./constants";

const getDateRange = () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  return {
    from: sevenDaysAgo.toISOString().split("T")[0],
    to: today.toISOString().split("T")[0],
  };
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getNews = (searchQuery) => {
  const dates = getDateRange();

  const params = new URLSearchParams({
    q: searchQuery,
    apiKey: APIkey,
    from: dates.from,
    to: dates.to,
    pageSize: 100,
  });

  return fetch(`${newsApiBaseUrl}?${params.toString()}`)
    .then(checkResponse)
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export default {
    getNews
  };
