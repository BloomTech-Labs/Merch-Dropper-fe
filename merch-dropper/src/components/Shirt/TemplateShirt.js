import React from "react";
import styled from "styled-components";
import bgShirt from "./templateShirt.png";

const TemplateShirt = ({ garment }) => {
  const { designWidth, designPlacement, offSetFromTop, artwork } = garment;

  let horizontalMod;
  switch (designPlacement) {
    case "L":
      horizontalMod = 0.95;
      break;
    case "LC":
      horizontalMod = 0.8;
      break;
    case "C":
      horizontalMod = 0.5;
      break;
    case "RC":
      horizontalMod = 0.2;
      break;
    case "R":
      horizontalMod = 0.05;
      break;
    default:
      horizontalMod = 0.5;
  }
  const horizontal =
    (horizontalMod * (224 - designWidth * 16) + 90).toString() + "px";
  const designSize = (designWidth * 16).toString() + "px";
  const offset = (offSetFromTop * 16 + 60).toString() + "px";

  return (
    <ShirtBox>
      <Design offset={offset} designSize={designSize} horizontal={horizontal}>
        {/* "artwork" contains the URL that is initially set in initialShirtState, and then  */}
        <img src={artwork} alt="" />
      </Design>
    </ShirtBox>
  );
};

export default TemplateShirt;

const ShirtBox = styled.div`
   {
    width: 400px;
    height: 485px;
    // background-color: pink;
    background-image: url(${bgShirt});
    background-repeat: no-repeat;
    background-position: bottom;
    border: 1px black solid;
    border-radius: 5px;
    overflow: hidden;
  }
`;
const Design = styled.div.attrs(props => ({
  top: props.offset || "90px",
  width: props.designSize || "32px",
  left: props.horizontal || "184px"
}))`
  width: ${props => props.designSize};
  // height: auto;
  position: relative;
  left: ${props => props.horizontal};
  top: ${props => props.offset};
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
