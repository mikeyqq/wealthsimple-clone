import React, { useEffect, useState } from "react";
import { getStory } from "../services/hackerNewsApi";

const StoriesListItem = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, [storyId]);

  return (
    <div>
      <p>this is the title: {story.id}</p>
      <p>this is the title: {story.title}</p>
    </div>
  );
};

export default StoriesListItem;
