import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const apiUrl = `${baseUrl}topstories.json`;
const storyIdUrl = `${baseUrl}item/`;

export const getStoriesId = async () => {
  const results = await axios.get(apiUrl).then(({ data }) => data);
  return results;
};

export const getStory = async storyId => {
  const results = await axios.get(`${storyIdUrl + storyId}.json`).then(({ data }) => data);
  return results;
};
