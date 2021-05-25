import React, { useState } from 'react'
import { StyledProduct } from "./Product.style"
import { Photos } from "./Photos";
import { Color } from "./Color"
import { Size } from './Size';
import { Actions } from './Actions';
import { Rating } from './Rating';

export const Product:React.FC = () => {
    return (
        <StyledProduct>
            <Photos />
            <div className="desc">
                <p>Man's Footwear</p>
                <h2>All Star Black Sneakers</h2>
                <Color/>
                <h3>Choose size</h3>
                <Size/>
                <Actions/>
                <div className="info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero velit atque tempora vitae ipsum veritatis quas dolore quod tempore possimus, molestias voluptate natus distinctio asperiores est adipisci laboriosam suscipit. Eius?
                    Tempore maxime inventore doloremque cum hic reprehenderit sint molestias nesciunt, animi corrupti id voluptatum, expedita dolorem, aliquid quas unde temporibus! Tempora velit odit harum! Tenetur odit corrupti vitae animi veniam.
                </div>
                <Rating/>
            </div>
        </StyledProduct>
    )
}

