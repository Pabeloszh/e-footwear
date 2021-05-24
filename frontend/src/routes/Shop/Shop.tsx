import React from 'react';
import { ProductsList } from './ProductsList'
import { Filter } from './Filter'
import { MobileFilter } from "./MobileFilter"
import { StyledShop } from './Shop.style';

export const Shop:React.FC = () => {
    return (
        <StyledShop>
            <div>
                <MobileFilter />
                <Filter/>
                <ProductsList/>
            </div>
        </StyledShop>
    )
}

