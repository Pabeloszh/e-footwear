import styled from "styled-components";

export const StyledData = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:800px;
    padding: 20px 35px;
    background-color:#fff;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    h2{
        font-family: 'Work Sans',sans-serif;
    }
   svg{
       color:#f4511e;
   }
   @media only screen and (max-width:1024px){
        width:auto;
        max-width:600px;
        padding: 15px 20px;
        h2{
            font-size: 18px;
            font-family: 'Work Sans',sans-serif;
        }
   }
`;