import React from 'react'
import {StyledColor} from "./ColorFilter.style";
import CheckIcon from '@material-ui/icons/Check';

export const ColorFilter:React.FC = () => {
    return (
        <StyledColor>
            <h2>Color</h2>
                <div className="color-container">
                    <div className="color" style={{backgroundColor: "red"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "blue"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "green"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "gray"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "yellow"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "pink"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "black"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "white"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "orange"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "brown"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                    <div className="color" style={{backgroundColor: "purple"}} onClick={(e)=>{
                        e.currentTarget.classList.toggle('active');
                    }}><CheckIcon/></div>
                </div>
        </StyledColor>
    )
}
