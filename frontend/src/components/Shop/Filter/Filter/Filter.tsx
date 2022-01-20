import React from 'react';
import { TypeFilter } from "./TypeFilter";
import { SortFilter } from "./SortFilter"
import { SizeFilter } from "./SizeFilter";
import { BrandFilter } from "./BrandFilter";
import { PriceFilter } from "./PriceFilter";
import { ColorFilter } from "./ColorFilter";

export const Filter:React.FC = () => {

    return (
        <>
            <TypeFilter />
            <SortFilter/>
            <SizeFilter />
            <BrandFilter />
            <PriceFilter />
            <ColorFilter />
        </>
    )
}

