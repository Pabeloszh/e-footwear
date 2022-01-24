import { Skeleton } from '@mui/material'
import React, { useState } from 'react'
import { SizeInterfaces } from './Size.interfaces'
import { StyledSize } from './Size.style'

export const Size = ({sizes, size, setSize} : SizeInterfaces) => {
    return (
        <StyledSize>
            {sizes && setSize 
                ? [35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54].map(el => (
                    sizes.includes(el) ? <p className={size === el ? "active occuring" : "occuring"} onClick={() => setSize(el)} key={el}>{el}</p> : <p key={el}>{el}</p>
                )) 
                : Array.apply(null, Array(20)).map(() => (
                    <Skeleton variant="rectangular" width={'100%'} height={30} />
                ))
            }
        </StyledSize>
    )
}