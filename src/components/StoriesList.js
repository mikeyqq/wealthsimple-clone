import React, { useEffect, useState } from "react";
import { getStoriesId } from "../services/hackerNewsApi";
import StoriesListItem from "./StoriesListItem";

const StoriesList = () => {
  const [newStories, setStories] = useState([]);

  useEffect(() => {
    getStoriesId().then(data => setStories(data));
  }, []);

  return newStories.map(storyId => <StoriesListItem key={storyId} storyId={storyId} />);
};
export default StoriesList;
