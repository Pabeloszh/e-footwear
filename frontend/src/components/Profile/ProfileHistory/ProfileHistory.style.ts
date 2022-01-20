import styled from "styled-components";

export const StyledHistory = styled.div`
    width:800px;
    padding: 20px 35px;
    background-color:#fff;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    h2{
        margin-bottom: 25px;
        font-size: 24px;
        font-family: 'Work Sans',sans-serif;
    }
    hr{
        margin: 20px 0;
        border:none;
        border-bottom: 1px solid #1703120f;
        width:100%;
        height:1px;
        background-color:#1703120f;
    }
    hr:last-child{
        display:none;
    }
    .MuiAccordionSummary-content{
        align-items:center;
        p:first-child{
            margin-right:30px;
            font-weight:600;
        }
        p:last-child{
            opacity:0.7;
            font-size:12px;
        }
    }
    .MuiAccordionDetails-root{
        flex-direction: column;
    }
    @media only screen and (max-width:1024px){
        width:auto;
        max-width:600px;
        padding: 15px 20px;
        h2{
            font-size: 18px;
        }
    }
`;