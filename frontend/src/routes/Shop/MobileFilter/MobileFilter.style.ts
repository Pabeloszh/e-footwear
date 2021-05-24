import styled from "styled-components";

export const StyledFilter = styled.div`
    display:none;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    @media only screen and (max-width: 1024px){
        width:100%;
        top: 64px;
        display:block;
        .filter-nav{
            background-color:white;
            height:57px;
            margin-bottom:25px;
            .sticky-nav{
                width:100%;
                background-color:white;
                padding: 15px 25px;
                display:flex;
                justify-content: space-between;
                align-items: center;
            }
            .sticky {
                position: fixed;
                z-index: 1001;
                top: 64px;
                width: 100%;
            }
        }
    }
    @media only screen and (max-width: 600px){
        .filter-nav{
            .sticky {
                top: 56px;
            }
        }
    }
`;