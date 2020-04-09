import React from "react";
import styled from "styled-components";

// this component maps the array of colors (at the bottom of this file) to the SwatchBox styled div
const Swatch = ({ garment, setGarment }) => {
  return (
    <SwatchBox>
      {colors.map((color, index) => (
        <a href="#section" key={index}>
          {/* the properties of SwatchSquare are set to color[0] which is the name of each color */}
          <SwatchSquare
            name="color"
            value={color[0]} // color is an array with 2 values, color[0] is the name of the color, color[1] is the hexcode
            id={color[0]}
            key={color[0]}
            title={color[0]}
            className="swatchSquare"
            onClick={() =>
              // this onClick spreads in the existing garment state object and assigns the relevant color information (name of color and hex code)
              setGarment({ ...garment, color: color[0], colorHex: color[1] })
            }
            // color[1] is the hex code of the color
            style={{ backgroundColor: color[1] }}
          ></SwatchSquare>
        </a>
      ))}
    </SwatchBox>
  );
};

export default Swatch;

const SwatchBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  margin-bottom: 15px;

  a:focus {
    outline: solid 1px black;
  }
`;

const SwatchSquare = styled.div`
  width: 20px;
  height: 20px;
  margin: 1px;
  border: solid 1px #ccc;
  border-radius: 3px;
`;

const colors = [
  ["Aqua", "#42B2D0"],
  ["Ash", "#DFE1E5"],
  ["Asphalt", "#5E646D"],
  ["Athletic Heather", "#AEADB3"],
  ["Berry", "#F1457F"],
  ["Black", "#000000"],
  ["Brown", "#62463B"],
  ["Burnt Orange", "#D66C1C"],
  ["Canvas Red", "#D12B43"],
  ["Coral", "#D36067"],
  ["Dark Gray Heather", "#595B5D"],
  ["Deep Heather", "#ADA9A6"],
  ["Deep Teal", "#00789A"],
  ["Evergreen", "#00563F"],
  ["Gold", "#F0A62D"],
  ["Heather Blue", "#F0F5FF"],
  ["Heather Brown", "#847363"],
  ["Heather Green", "#88AD68"],
  ["Heather Navy", "#6E8BC4"],
  ["Heather Slate", "#77ACC8"],
  ["Heather Tan", "#D9C4AF"],
  ["Kelly", "#157345"],
  ["Leaf", "#8ACA99"],
  ["Light Blue", "#AFD1EA"],
  ["Maize Yellow", "#E9D47B"],
  ["Maroon", "#640D02"],
  ["Navy", "#14213D"],
  ["Ocean Blue", "#ABD6E7"],
  ["Olive", "#495928"],
  ["Orange", "#F16300"],
  ["Pebble Brown", "#A49696"],
  ["Red", "#C02533"],
  ["Silver", "#DEE0DF"],
  ["Soft Cream", "#E2D2B8"],
  ["Soft Pink", "#FEC0C5"],
  ["Solid Black Blender", "#000000"],
  ["Solid White Blender", "#FFFFFF"],
  ["Steel Blue", "#6686AE"],
  ["Teal", "#03BDBC"],
  ["Team Purple", "#824393"],
  ["True Royal", "#1155B1"],
  ["White", "#FFFFFF"],
  ["Yellow", "#FFF9C0"],
  ["Dark Gray", "#585755"],
  ["Heather Kelly", "#4FD0A1"],
  ["Heather Orange", "#FFC3B5"],
  ["Heather Team Purple", "#A89BD6"],
  ["Vintage Black", "#3A3430"],
  ["Heather Red", "#EC7670"],
  ["Heather True Royal", "#3096E2"],
  ["Army", "#645D4B"],
  ["Heather Raspberry", "#FFB3D1"],
  ["Mint", "#D1FEFF"],
  ["Natural", "#FFFEDE"],
  ["Baby Blue", "#82B9FF"],
  ["Cardinal", "#C03545"],
  ["Turquoise", "#088CBE"],
  ["Forest Green", "#305746"],
  ["Heather Midnight Navy", "#5F6174"],
  ["Heather Yellow Gold", "#FEEEBE"],
  ["Heather Cardinal", "#953543"],
  ["Heather Deep Teal", "#619DBE"],
  ["Heather Forest", "#67807F"],
  ["Heather Mint", "#EAF5F2"],
  ["Charity Pink", "#F4D2D9"],
  ["Heather Dusty Blue", "#CDE3E1"],
  ["Heather Grass Green", "#3D7256"],
  ["Heather Mauve", "#BF8583"],
  ["Heather Military Green", "#51563F"],
  ["Heather Prism Dusty Blue", "#C2DCDD"],
  ["Heather Prism Ice Blue", "#E4EFF1"],
  ["Heather Prism Lilac", "#E8DDE5"],
  ["Heather Prism Mint", "#C7DFD1"],
  ["Heather Prism Peach", "#E6D3C5"],
  ["Heather Prism Sunset", "#E1A791"],
  ["Heather Storm", "#878183"],
  ["Heather Sunset", "#FAB19E"],
  ["Mauve", "#9E6460"],
  ["Military Green", "#51563F"],
  ["Oxblood Black", "#2B1518"],
  ["Storm", "#8E8387"],
  ["Sunset", "#FECCAB"],
  ["Tan", "#DDCD93"],
  ["Black Heather", "#000000"],
  ["Heather Olive", "#3D4C3A"],
  ["Heather Maroon", "#88353C"],
  ["Heather Columbia Blue", "#538ED6"],
  ["Heather Aqua", "#84BEDF"],
  ["Heather Stone", "#E4DBC6"],
  ["Pink", "#F7B4C1"],
  ["Heather Clay", "#B55851"],
  ["Heather Sea Green", "#A5ECEE"],
  ["Heather Ice Blue", "#E0F1F5"],
  ["Rust", "#A03033"],
  ["Heather Peach", "#F1D9C1"]
];
