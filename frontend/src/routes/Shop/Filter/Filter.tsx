import React from 'react'
import { TypeFilter } from "./TypeFilter"
import { SizeFilter } from "./SizeFilter"
import { BrandFilter } from "./BrandFilter"
import { PriceFilter } from "./PriceFilter"
import { ColorFilter } from "./ColorFilter"
import {StyledFilter} from "./Filter.style"

export const Filter:React.FC = () => {

    return (
        <StyledFilter>
            <TypeFilter />
            <SizeFilter />
            <BrandFilter />
            <PriceFilter />
            <ColorFilter />
        </StyledFilter>
    )
}

