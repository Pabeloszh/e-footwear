import styled from "styled-components";

export const StyledData = styled.div`
    width:800px;
    padding: 20px 35px;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    margin-bottom:25px !important;
    h2{
        margin-right:15px;
    
    }
   svg{
       color:#f4511e;
   }
   @media only screen and (max-width:1024px){
        width:auto;
        max-width:600px;
   }
`;