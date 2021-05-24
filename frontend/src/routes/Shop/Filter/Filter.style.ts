import styled from 'styled-components';

export const StyledFilter = styled.div`
    width:200px;
    margin-right:24px;
    padding-bottom:35px;
    > div:not(:last-child){
        border-bottom: 1px #170312 solid;
    }
    > div{
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        padding: 25px 10px;
        h2{
            font-size:20px;
            margin-bottom:15px;
        }
    }
    @media only screen and (max-width: 1024px){
        display:none;
    }
`;