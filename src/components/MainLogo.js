import styled from "styled-components";
import Logo from "./Logo";
import { fadeIn } from "../utils/animation";

const MainLogo = styled(Logo)`
  position: absolute;
  z-index: -1;
  width: 400px;
  animation: ${fadeIn} 2s ease-out 1 both;
`;

export default MainLogo;
