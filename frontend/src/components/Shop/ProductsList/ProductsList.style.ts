import styled from "styled-components";

export const StyledList = styled.div`
    width:830px;
    .products{
        margin-bottom:50px;
        display:grid;
        grid-template-columns: repeat(4, 200px);
        grid-auto-rows: 360px;
        row-gap:15px;
        column-gap:10px;
    }
    >h2 {
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight:600;
        text-align:center;
    }
    @media only screen and (max-width:1440px){
        width:620px;
        .products{
            grid-template-columns: repeat(3, 200px);
        }
    }
    @media only screen and (max-width: 1024px){
        margin:auto;
    }
    @media only screen and (max-width:768px){
        width:400px;
        .products{
            grid-template-columns: repeat(2, 200px);
        }
    }
    @media only screen and (max-width:425px){
        width:300px;
        .products{
            grid-template-columns: repeat(2, 150px);
            // grid-template-rows: repeat(auto-fill, 270px);
            grid-auto-rows: 270px;
        }

    }
`;