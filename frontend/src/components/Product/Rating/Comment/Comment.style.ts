import styled from "styled-components";

interface Props{
    comments: boolean
}

export const StyledComment = styled.div<Props>`
    margin: 15px 0;
    border:1px solid #170312;
    border-radius:5px;
    padding:15px;
    > div {
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:10px;
    }
    @media only screen and (max-width: 1024px){
        >div{
            flex-direction:column-reverse;
            align-items:flex-start;
            p{
                margin-bottom:10px;   
            }
            p:last-child{
                margin-bottom:5px;
            }
        }
    }
`;