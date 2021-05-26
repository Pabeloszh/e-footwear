import styled from "styled-components";

export const StyledHistory = styled.div`
    width:800px;
    background-color:#fff;
    margin-left:50px;
    padding: 20px 35px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    h2{
        font-size: 24px;
        font-family: 'Work Sans',sans-serif;
        margin-bottom: 25px;
    }
    hr{
        height:1px;
        background-color:#1703120f;
        border:none;
        border-bottom: 1px solid #1703120f;
        margin: 20px 0;
    }
    hr:last-child{
        display:none;
    }
    @media only screen and (max-width:1024px){
        width:auto;
        max-width:600px;
    }
`;