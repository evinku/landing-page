import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html{
    scroll-behavior:smooth
}

body { 
color: white;
fill: red;
background: linear-gradient(90deg, rgba(26,28,27,1) 0%, rgba(80,83,81,1) 53%);
margin:0;
font-family: 'Roboto Slab', serif;
}


`;

export default GlobalStyle;
