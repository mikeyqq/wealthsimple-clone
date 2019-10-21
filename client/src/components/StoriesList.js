import React, { useEffect, useState } from "react";
import { getStoriesId } from "../services/hackerNewsApi";
import StoriesListItem from "./StoriesListItem";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import magazineLogo from "../../src/assets/images/magazine_logo.png";
import styled from "styled-components";
import { device } from "../../src/responsive/device";

const StoriesList = () => {
  const { count } = useInfiniteScroll();
  const [newStories, setStories] = useState([]);

  useEffect(() => {
    getStoriesId().then(data => setStories(data));
  }, []);

  const Theme = {
    fonts: {
      heading: `"Hind", sans-serif;`
    }
  };

  const Storiessection = styled.body`
    @media ${device.mobileL} {
      display: block;
      padding-top: 50px;
    }
    @media ${device.tablet || device.laptop} {
      display: block;
      padding-top: 140px;
    }
  `;

  const Storiestitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: FuturaBT-Heavy, sans-serif;
  `;

  const MagazineLogo = styled.img`
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.tablet || device.laptop} {
      width: 250px;
      height: 60px;
      margin-top: 80px;
      margin-bottom: 0px;
    }
  `;
  const H1 = styled.h1`
    font-family: ${Theme.fonts.heading};
    margin-top: 50px;
    margin-bottom: 0px;
    color: #262626;
    @media ${device.mobileL} {
      font-size: 50px;
    }
    @media ${device.tablet} {
      font-size: 60px;
    }
    @media ${device.laptop} {
      font-size: 100px;
    }
  `;

  const H5 = styled.h5`
    color: grey;
    font-family: ${Theme.fonts.heading};
    margin-top: 0px;
    margin-bottom: 30px;
    letter-spacing: 3px;
    @media ${device.mobileS} {
      font-size: 7px;
      letter-spacing: 1px;
    }
    @media ${device.mobileL} {
      font-size: 13px;
    }
    @media ${device.tablet || device.laptop} {
      font-size: 15px;
    }
  `;
  const H4 = styled.h4`
    @media ${device.tablet || device.laptop} {
      font-size: 20px;
      margin-top: 0px;
    }
  `;

  const Storiesbody = styled.body`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media ${device.tablet} {
      padding: 0px 0px;
    }
    @media ${device.laptop} {
      padding: 0px 20px;
    }
  `;

  return (
    <Storiessection>
      <Storiestitle>
        <MagazineLogo src={magazineLogo} />
        <H1>Magazine</H1>
        <H5>STORIES AND IDEAS FROM WEALTHSIMPLE</H5>
        <H4>Top Stories</H4>
      </Storiestitle>
      <Storiesbody>
        {newStories.slice(0, count).map(storyIds => (
          <div>
            <StoriesListItem key={storyIds} storyId={storyIds} />
          </div>
        ))}
      </Storiesbody>
    </Storiessection>
  );
};
export default StoriesList;
