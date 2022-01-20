import styled from "styled-components";

export const StyledSize = styled.div`
    div{
        display:grid;
        grid-template-columns: repeat(5, auto);
        gap:4px;
        p{
            cursor:pointer;
            text-align:center;
            border:1px solid #170312;
            margin:0;
            padding:5px;
            border-radius:2px;
        }
        .active{
            background-color:#F4511E;
            border: 1px solid #F4511E;
            color:#fff;
        }
    }
`;