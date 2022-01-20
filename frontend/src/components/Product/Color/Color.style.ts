import styled from "styled-components";

export const StyledColor = styled.div`
    display:grid;
    grid-template-columns: repeat(6, 70px);
    grid-template-rows: repeat(auto-fill, 70px);
    gap:15px;
    margin-bottom: 25px;
    img{
        border:1px solid #170312;
        border-radius:5px;
        width:100%;
        height:100%;
        object-fit: cover;
        cursor:pointer;
    }
    .active{
        border:2px solid #F4511E;
    }
`;