import React, { useEffect, useState } from "react";
import { getStoriesId } from "../services/hackerNewsApi";
import StoriesListItem from "./StoriesListItem";

const StoriesList = () => {
  const [newStories, setStories] = useState([]);

  useEffect(() => {
    getStoriesId().then(data => setStories(data));
  });

  return newStories.map(storyIds => <StoriesListItem key={storyIds} storyId={storyIds} />);
};
export default StoriesList;
