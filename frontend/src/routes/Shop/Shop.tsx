import React from 'react';
import { ProductsList } from '../../components/Shop/ProductsList'
import { DesktopFilter } from '../../components/Shop/Filter/DesktopFilter'
import { MobileFilter } from "../../components/Shop/Filter/MobileFilter"
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

