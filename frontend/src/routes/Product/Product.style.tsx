import styled from "styled-components";

export const StyledProduct = styled.div`
    padding: 125px 35px 75px 35px;
    display:flex;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    .desc{
        width:50%;
        padding: 15px 35px;
        h2{
            font-size:32px;
            margin-bottom:25px;
        }
        > h3{
            margin-bottom:10px
        }
        .info{
            border-top:1px solid #170312;
            padding:25px 0px;
            line-height:1.4em;
        }
        
    }
    @media only screen and (max-width: 1024px){
        flex-direction:column;
        padding: 75px 15px 25px 15px;
        .desc{
            padding: 0;
            width:100%;
        }
    }
`;