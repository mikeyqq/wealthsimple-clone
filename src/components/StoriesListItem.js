import React, { useEffect, useState } from "react";
import { getStory } from "../services/hackerNewsApi";

const StoriesListItem = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return (
    <div>
      <a href={story.url}>
        <p>this is the title: {story.title}</p>
      </a>
      <p>this is the title: {story.url}</p>
    </div>
  );
};

export default StoriesListItem;
