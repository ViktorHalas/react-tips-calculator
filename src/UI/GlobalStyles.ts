import { createGlobalStyle } from "styled-components";
import ellipse from "../assets/ellipses.svg"

export const GlobalStyles = createGlobalStyle`
    body, h1, h3, p {
        margin: 0;
        padding: 0;
    };
    
    body{
        background-image:url(${ellipse});
        background-repeat: no-repeat;
        background-color: #EAF2F2;
    }
    `;
