import React, { useEffect, useState } from "react";
import StoriesListItemImage from "./StoriesListItemImage";
import { getStory } from "../services/hackerNewsApi";
import styled from "styled-components";
import { device } from "../../src/responsive/device";

const StoriesListItem = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

  useEffect(() => {
    console.log("WE ARE POSITING STROY URL TO SEE IF SECOND USEEFFECT WORKS", story.url);
  });

  const Storiesbody = styled.div`
    display: display;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 20px;
    @media ${device.mobileL} {
      width: 99vw;
    }
    @media ${device.tablet || device.laptop} {
      margin: 20px;
      width: 40vw;
    }
    @media ${device.laptopL} {
      width: 33vw;
    }
    @media ${device.desktopL} {
      width: 25vw;
    }
  `;

  const Storiestitle = styled.div`
    background-color: white;
    letter-spacing: -0.03em;
    height: 3em;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 30px;
    a:link {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  `;

  return (
    <Storiesbody>
      <div>
        <StoriesListItemImage key={story.id} storyUrl={story.url} />
      </div>
      <Storiestitle>
        <a href={story.url}>
          <p>{story.title}</p>
        </a>
      </Storiestitle>
    </Storiesbody>
  );
};

export default StoriesListItem;
