import styled from 'styled-components';

export const StyledColor = styled.div`
    > div {
        display:grid;
        grid-template-columns: repeat(5, auto);
        p{
            display:none;
        }
        .color{
            border:1px #170312b2 solid;
            margin-bottom:8px;
            cursor:pointer;
            padding:0;
            width:25px;
            height:25px;
            border-radius:50%;
            background-color:red;
            .MuiSvgIcon-root{
                display:none;
            }
        }
        .active{
            border:1px #f4501eb6 solid;
            .MuiSvgIcon-root{
                display:block;
                padding:3px 4px 3px 3px;
                color:#f4511e;
            }
        }
    }
    @media only screen and (max-width: 1024px){
        > div{
            padding-top:7.5px;
            display:grid;
            grid-template-columns: repeat(3, auto);
            align-self:center;
            p{
                display:block;
                text-align:center;
                margin-bottom:20px;
            }
            .color{
                border:1px #170312b2 solid;
                margin:auto;
                cursor:pointer;
                margin-bottom:8px;
                padding:0;
                width:25px;
                height:25px;
                border-radius:50%;
                background-color:red;
                .MuiSvgIcon-root{
                    display:none;
                }
            }
            .active{
                border:1px #f4501eb6 solid;
                .MuiSvgIcon-root{
                    display:block;
                    padding:3px 4px 3px 3px;
                    color:#f4511e;
                }
            }
        }
    }
`;