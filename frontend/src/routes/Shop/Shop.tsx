import React from 'react';
import { ProductsList } from './ProductsList'
import { DesktopFilter } from './Filter/DesktopFilter'
import { MobileFilter } from "./Filter/MobileFilter"
import { StyledShop } from './Shop.style';

export const Shop:React.FC = () => {
    return (
        <StyledShop>
            <div>
                <MobileFilter />
                <DesktopFilter/>
                <ProductsList/>
            </div>
        </StyledShop>
    )
}

