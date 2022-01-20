import React, { useState } from 'react'
import { SizeInterfaces } from './Size.interfaces'
import { StyledSize } from './Size.style'

export const Size = ({sizes, size, setSize} : SizeInterfaces) => {
    return (
        <StyledSize>
            {[35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54].map(el => (
                sizes.includes(el) ? <p className={size === el ? "active occuring" : "occuring"} onClick={() => setSize(el)}>{el}</p> : <p>{el}</p>
            ))}
        </StyledSize>
    )
}