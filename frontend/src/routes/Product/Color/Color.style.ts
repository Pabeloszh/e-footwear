import styled from "styled-components";

export const StyledColor = styled.div`
    margin-bottom: 25px;
    display:grid;
    grid-template-columns: repeat(6, 70px);
    grid-template-rows: repeat(auto-fill, 70px);
    gap:15px;
    img{
        cursor:pointer;
        width:100%;
        height:100%;
        object-fit: cover;
        border-radius:5px;
        border:1px solid #170312;
    }
    .active{
        border:2px solid #F4511E;
    }
`;