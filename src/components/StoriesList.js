import React, { useEffect, useState } from "react";
import { getStoriesId } from "../services/hackerNewsApi";
import StoriesListItem from "./StoriesListItem";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const StoriesList = () => {
  const { count } = useInfiniteScroll();
  const [newStories, setStories] = useState([]);

  useEffect(() => {
    getStoriesId().then(data => setStories(data));
  }, []);

  return (
    <div>
      {newStories.slice(0, count).map(storyIds => (
        <StoriesListItem key={storyIds} storyId={storyIds} />
      ))}
    </div>
  );
};
export default StoriesList;
