import styled from 'styled-components';

export const StyledFilter = styled.div`
    width:200px;
    margin-right:24px;
    /* background-color:#F4511E; */
    div{
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        border-bottom: 1px #170312 solid;
        padding: 15px 10px;
        h2{
            font-size:20px;
            margin-bottom:15px;
        }
        h4{
            font-size:14px;
            cursor:pointer;
        }
        h4:not(:last-child){
            margin-bottom:10px;
        }
        .size-container{
            padding:0;
            border:none;
            display:grid;
            grid-template-columns: repeat(5, auto);
            gap:4px;
            h4{
                text-align:center;
                border:1px solid #170312;
                margin:0;
                padding:5px;
                border-radius:2px;
            }
        }
        .brand-container{
            padding:0;
            border:none;
            label{
                height:30px;
            }
            .MuiCheckbox-colorPrimary.Mui-checked{
                color:#f4511e !important;
            }
        }
        .price-container{
            border:0;
            padding:0;
            display:flex;
            align-items:center;
            div{
                padding:0;
                margin:0;
                border: none;
                input{
                    padding:5px;
                }
            }
            .MuiInputLabel-outlined {
                transform: translate(14px, 7.5px) scale(1);
            }
            .MuiInputLabel-outlined.MuiInputLabel-shrink{
                transform: translate(14px, -6px) scale(0.75);
            }
            .MuiSlider-root{
                color:#F4511E !important;
            }
            h4{
                margin:0 5px;
            }
        }
    }
`;