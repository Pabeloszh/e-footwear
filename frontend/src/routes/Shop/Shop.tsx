import React from 'react';
import { ProductsList } from './ProductsList'
import {Filter} from './Filter/Filter'
import { StyledShop } from './Shop.style';

export const Shop:React.FC = () => {
    return (
        <StyledShop>
            <div>
                <Filter/>
                <ProductsList/>
            </div>
        </StyledShop>
    )
}

