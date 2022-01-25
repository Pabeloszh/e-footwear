import { Skeleton } from '@mui/material'
import React, { useState } from 'react'
import { sizes } from '../../../utils'
import { SizeInterfaces } from './Size.interfaces'
import { StyledSize } from './Size.style'

export const Size = ({aviableSizes, forKids, size, setSize} : SizeInterfaces) => {
    console.log(aviableSizes);
    return (
        <StyledSize>
            {aviableSizes && setSize 
                ? sizes(forKids ? 'kids' : 'false').map(el => (
                    aviableSizes.includes(el) ? <p className={size === el ? "active occuring" : "occuring"} onClick={() => setSize(el)} key={el}>{el}</p> : <p key={el}>{el}</p>
                )) 
                : Array.apply(null, Array(20)).map(() => (
                    <Skeleton variant="rectangular" width={'100%'} height={30} />
                ))
            }
        </StyledSize>
    )
}