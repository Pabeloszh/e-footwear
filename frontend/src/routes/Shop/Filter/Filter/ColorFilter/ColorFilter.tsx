import React from 'react'
import {StyledColor} from "./ColorFilter.style";
import CheckIcon from '@material-ui/icons/Check';

export const ColorFilter:React.FC = () => {
    return (
        <StyledColor>
            <h2>Color</h2>
                <div className="color-container">
                <div>
                        <div className="color" style={{backgroundColor: "red"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Red</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "blue"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Blue</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "green"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Green</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "gray"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Gray</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "yellow"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Yellow</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "pink"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Pink</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "black"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Black</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "white"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>White</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "orange"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Orange</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "brown"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Brown</p>
                    </div>
                    <div>
                        <div className="color" style={{backgroundColor: "purple"}} onClick={(e)=>{
                            e.currentTarget.classList.toggle('active');
                        }}><CheckIcon/></div><p>Purple</p>
                    </div>
                </div>
        </StyledColor>
    )
}
