import styled from "styled-components";

export const StyledSize = styled.div`
    display:grid;
    grid-template-columns: repeat(5, auto);
    gap:4px;
    margin-bottom:30px;
    p{
        opacity: 0.7;
        margin:0;
        border:1px solid #170312;
        border-radius:2px;
        padding:5px;
        text-align:center;
    }
    .occuring{
        opacity: 1;
        border:1px solid #170312;
        cursor:pointer;
    }
    .active, .occuring:hover{
        border:1px solid #F4511E;
        background-color:#F4511E;
        color:#fff;
    }
`;