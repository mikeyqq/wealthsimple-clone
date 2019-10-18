import axios from "axios";

const apiUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";

export const getStories = async () => {
  const results = await axios.get(apiUrl).then(({ data }) => data);
  return results;
};
