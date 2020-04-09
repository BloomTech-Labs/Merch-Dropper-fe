import React, { useState, Fragment } from "react";

// styles
import "../../App.css";
import styled from "styled-components";

// components
import MockupDisplay from "./MockupDisplay";
import DesignPositionPanel from "./DesignPositionPanel";
import DesignInputPanel from "./DesignInputPanel";

// function imported that literally returns NULL??
import HandleScalableMockup from "./HandleScalableMockup";
// initial design and garment state
import initialShirtState from "./initialShirtState";
// another function
import AddProduct from "./AddProduct";

// This code represents the shirt designer tool/page that gets imported into App.js
const DesignShirt = () => {
  const [design, setDesign] = useState(initialShirtState.designInfo);
  const [garment, setGarment] = useState(initialShirtState.garment);
  const [thumbRender, setThumbRender] = useState();

  const handleScalableMockup = function() {
    HandleScalableMockup(garment, setGarment);
  };
  const addProduct = function() {
    AddProduct(garment);
  };

  return (
    <Fragment>
      <DesignShirtContainer>
        <MockupDisplay garment={garment} />
        <DesignPositionPanel garment={garment} setGarment={setGarment} />
        <DesignInputPanel
          design={design}
          setDesign={setDesign}
          thumbRender={thumbRender}
          setThumbRender={setThumbRender}
          garment={garment}
          setGarment={setGarment}
          handleScalableMockup={handleScalableMockup}
          addProduct={addProduct}
        />
      </DesignShirtContainer>
    </Fragment>
  );
};

export default DesignShirt;

const DesignShirtContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-top: 15px;
`;
