import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const apiUrl = `${baseUrl}topstories.json`;
const storyIdUrl = `${baseUrl}item/`;

//this function returns story ids which will pass into getStory function
export const getStoriesId = async () => {
  const results = await axios.get(apiUrl).then(({ data }) => data);
  console.log("results from getStoriesID", results);
  return results;
};

//this function returns individual storyids key:value pair
export const getStory = async storyId => {
  const results = await axios
    .get(`${storyIdUrl + storyId}.json`)
    .then(({ data }) => data)
    .catch(error => console.log("this is the error from", error));
  console.log("results from getSTORY", results);
  return results;
};

//this function returns url html data
// export const getStoryMeta = async storyUrl => {
//   const results = await axios.get(`${corsProxyUrl + storyUrl}`).then(({ data }) => data);
//   console.log("what is this data from getStoryMeta", results);
//   return results;
// };
