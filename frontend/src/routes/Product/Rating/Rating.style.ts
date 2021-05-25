import styled from "styled-components";

interface Props{
    comments: boolean
}

export const StyledRating = styled.div<Props>`
    padding:25px 0px;
    border-top:1px solid #170312;
    border-bottom:1px solid #170312;
    .title{
        display:flex;
        justify-content:space-between;
        align-items:center;
        div{
            h3{
                padding-top:2px;
                margin-right:10px;
            }
            p{
                cursor:pointer;
                margin-top:5px;
                text-decoration:underline;
            }
        }
        div:last-child{
            display:flex;
            justify-content:space-between;
            align-items:center; 
            .dropdown{
                cursor:pointer;
                transition: all 250ms ease-in-out;
                transform-origin: center;
                transform: rotate(${props=>props.comments ? '180deg' : '0deg'});
            }
        }
    }
    .comments{
        transition: all 500ms ease-in-out;
        max-height:${props=>props.comments ? '1000px' : 0};
        opacity:${props=>props.comments ? 1 : 0};
        visibility:${props=>props.comments ? 'visible' : 'hidden'};
        padding-top:${props=>props.comments ? '25px' : 0};;
    }
`