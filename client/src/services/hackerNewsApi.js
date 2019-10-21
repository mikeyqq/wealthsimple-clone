import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const apiUrl = `${baseUrl}topstories.json`;
const storyIdUrl = `${baseUrl}item/`;
const serverApi = "http://localhost:4000/api/storyurl/image";

//this function returns story ids which will pass into getStory function
export const getStoriesId = async () => {
  const results = await axios.get(apiUrl).then(({ data }) => data);
  return results;
};

//this function returns individual storyids key:value pair
export const getStory = async storyId => {
  const results = await axios
    .get(`${storyIdUrl + storyId}.json`)
    .then(({ data }) => data)
    .catch(error => console.log("this is the error from", error));
  return results;
};

//this function returns url html data
export const getStoryMeta = async storyUrl => {
  const results = await axios
    .post(`${serverApi}`, { storyUrl })
    .then(({ data }) => data)
    .catch(error => console.log("this is the error from", error));
  console.log("this is what I GET BACK FROMTHE SEVRER", results);
  return results;
};
