import React from "react";
// import { getStoryMeta } from "../services/hackerNewsApi";
import styled from "styled-components";
import happy from "../../src/assets/images/happy.png";

const StoriesListItemImage = ({ storyUrl }) => {
  //function to set meta data of image url from API end from backend.
  // const [image, setImage] = useState(null);

  // useEffect(() => {
  //   getStoryMeta(storyUrl).then(data =>
  //     console.log(
  //       "ALEX - THIS IS THE AXIOS.GET REQUEST ON THE URL THAT I GOT FROM THE HACKERNEWS API",
  //       JSON.stringify(data)
  //     )
  //   );
  // });

  const Storiesimage = styled.div`
    display: block;
    height: 0;
    overflow: hidden;
    padding-bottom: 60%;
    width: 100%;
  `;

  return (
    <Storiesimage>
      <img src={happy} alt="happy" />
    </Storiesimage>
  );
};

export default StoriesListItemImage;
