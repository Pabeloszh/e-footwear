import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        -webkit-tap-highlight-color: transparent;
    }
    body{
        background-color:#f6f6f6;
    }
`;