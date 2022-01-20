import styled from "styled-components";

export const StyledType = styled.div`
    padding-top:0 !important;
    div{
        p{
            padding: 0 3px;
            font-size:16px;
            cursor:pointer;
        }
        .active{
            color: #F4511E;
        }
        p:not(:last-child){
            margin-bottom:10px;
        }
    }
`;