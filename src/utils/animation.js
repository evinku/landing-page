import { keyframes } from "styled-components";

export const fadeIn = keyframes`

from {
    opacity: 0;
    transform: scale(0.2) 
    
}

to {
    opacity:1;
    transform: scale(1.0)

}

`;

export const rotate = keyframes`

from {
    opacity: 0;
    transform: scale(0.2) rotate(0deg)
    
}

to {
    opacity:1;
    transform: scale(1.0) rotate(360deg)

}

`;
