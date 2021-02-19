import { createGlobalStyle } from "styled-components";

export const GloablStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    }
    
    body{
    overflow-x: hidden;

    }
    button{
        outline: none;
    }
`;
