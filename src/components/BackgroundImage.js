import styled from "styled-components";

const BackgroundImage = styled.img`
  position: absolute;
  top: 0%;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  filter: grayscale(0.5) saturate(2) brightness(1.2);
`;

export default BackgroundImage;
