import React, { useEffect } from "react";
import { getStoryMeta } from "../services/hackerNewsApi";
import styled from "styled-components";
import happy from "../../src/assets/images/happy.png";

const StoriesListItemImage = props => {
  //function to set meta data of image url from API end from backend.
  // const [image, setImage] = useState(null);

  useEffect(() => {
    getStoryMeta(props.storyUrl).then(data => console.log("Retrieving data with image url back from backend", data));
  });

  const Storiesimage = styled.div`
    display: block;
    height: 0;
    overflow: hidden;
    padding-bottom: 60%;
    width: 100%;
  `;

  return (
    <Storiesimage>
      <a href={props.storyUrl}>
        <img src={happy} alt="happy" />
      </a>
    </Storiesimage>
  );
};

export default StoriesListItemImage;
