import styled from "styled-components";
import { fadeIn, rotate } from "../utils/animation";

const Avatar = styled.img`
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 50%;
  height: ${props => props.height};
  width: ${props => props.width};
  animation: ${rotate} 3s ease infinite;
`;

export default Avatar;
