import styled from "styled-components";

interface Props{
    comments: boolean
}

export const StyledRating = styled.div<Props>`
    border-top:1px solid #170312;
    border-bottom:1px solid #170312;
    padding:25px 0px;
    .title{
        display:flex;
        justify-content:space-between;
        align-items:center;
        div{
            h3{
                margin-right:10px;
                padding-top:2px;
            }
            p{
                margin-top:5px;
                cursor:pointer;
                text-decoration:underline;
            }
        }
        div:last-child{
            display:flex;
            justify-content:space-between;
            align-items:center; 
            .dropdown{
                transition: all 250ms ease-in-out;
                transform-origin: center;
                transform: rotate(${props=>props.comments ? '180deg' : '0deg'});
                cursor:pointer;
            }
        }
    }
    .comments{
        overflow: hidden;
        transition: all 500ms ease-in-out;
        max-height:${props=>props.comments ? '10000px' : '0px'};
        opacity:${props=>props.comments ? 1 : '0px'};
        visibility:${props=>props.comments ? 'visible' : 'hidden'};
        padding-top:${props=>props.comments ? '25px' : '0px'};;
    }
`