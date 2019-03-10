import React from "react";
import styled from "@emotion/styled";

const FontContainer = styled("section")`
  font-family: ${props => props.fontFamily || "inherit"};
  width: 100vw;
  min-height: 100vh;
  background: white;
  padding: 20px;
`;

const FontSample = styled("div")`
  font-size: 40px;
  text-transform: capitalize;
  margin-bottom: 20px;
  padding: 3px;
  border-bottom: 1px solid #444;
  max-width: 560px;
`;

const Thin = styled(FontSample)`
  font-weight: 100;
`;
const ThinItalic = styled(FontSample)`
  font-weight: 100;
  font-style: italic;
`;

const ExtraLight = styled(FontSample)`
  font-weight: 200;
`;

const ExtraLightItalic = styled(FontSample)`
  font-weight: 200;
  font-style: italic;
`;

const Light = styled(FontSample)`
  font-weight: 300;
`;

const LightItalic = styled(FontSample)`
  font-weight: 300;
  font-style: italic;
`;

const Regular = styled(FontSample)`
  font-weight: 400;
`;

const RegularItalic = styled(FontSample)`
  font-weight: 400;
  font-style: italic;
`;

const Medium = styled(FontSample)`
  font-weight: 500;
`;

const MediumItalic = styled(FontSample)`
  font-weight: 500;
  font-style: italic;
`;

const SemiBold = styled(FontSample)`
  font-weight: 600;
`;

const SemiBoldItalic = styled(FontSample)`
  font-weight: 600;
  font-style: italic;
`;

const Bold = styled(FontSample)`
  font-weight: 700;
`;

const BoldItalic = styled(FontSample)`
  font-weight: 700;
  font-style: italic;
`;

const ExtraBold = styled(FontSample)`
  font-weight: 800;
`;

const ExtraBoldItalic = styled(FontSample)`
  font-weight: 800;
  font-style: italic;
`;

const Black = styled(FontSample)`
  font-weight: 900;
`;

const BlackItalic = styled(FontSample)`
  font-weight: 900;
  font-style: italic;
`;

const FontShowcase = fontFamily => {
  return (
    <FontContainer>
      <Thin fontFamily={fontFamily}>thin</Thin>
      <ThinItalic fontFamily={fontFamily}>thin italic</ThinItalic>
      <ExtraLight fontFamily={fontFamily}>Extra Light</ExtraLight>
      <ExtraLightItalic fontFamily={fontFamily}>
        Extra light italic
      </ExtraLightItalic>
      <Light fontFamily={fontFamily}>Light</Light>
      <LightItalic fontFamily={fontFamily}>light italic</LightItalic>
      <Regular fontFamily={fontFamily}>regular</Regular>
      <RegularItalic fontFamily={fontFamily}>regular italic</RegularItalic>
      <Medium fontFamily={fontFamily}>medium</Medium>
      <MediumItalic fontFamily={fontFamily}>medium italic</MediumItalic>
      <SemiBold fontFamily={fontFamily}>semi bold</SemiBold>
      <SemiBoldItalic fontFamily={fontFamily}>semi bold italic</SemiBoldItalic>
      <Bold fontFamily={fontFamily}>bold</Bold>
      <BoldItalic fontFamily={fontFamily}>bold italic</BoldItalic>
      <ExtraBold fontFamily={fontFamily}>extra bold</ExtraBold>
      <ExtraBoldItalic fontFamily={fontFamily}>
        extra bold italic
      </ExtraBoldItalic>
      <Black fontFamily={fontFamily}>black</Black>
      <BlackItalic fontFamily={fontFamily}>black italic</BlackItalic>
    </FontContainer>
  );
};

export default FontShowcase;
