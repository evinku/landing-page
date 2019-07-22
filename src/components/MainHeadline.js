import styled from "styled-components";
import Headline from "./Headline";
import { fadeIn, rotate } from "../utils/animation";

const MainHeadline = styled(Headline)`
  animation: ${fadeIn} 2s ease-out 1 both, ${rotate} 2s ease-out infinite;
  animation: ${rotate} 2s ease-out infinite;
`;

export default MainHeadline;
