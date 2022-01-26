import { Skeleton } from '@mui/material'
import { SizeInterfaces } from './Size.interfaces'
import { StyledSize } from './Size.style'
import { sizes } from '../../../utils'

export const Size = ({aviableSizes, forKids, size, setSize} : SizeInterfaces) => {

    return (
        <StyledSize>
            {aviableSizes && setSize 
                ? sizes(forKids ? 'kids' : 'false').map(el => (
                    aviableSizes.includes(el) 
                        ? <p className={size === el ? "active occuring" : "occuring"} onClick={() => setSize(el)} key={el}>{el}</p> 
                        : <p key={el}>{el}</p>
                )) 
                : Array.apply(null, Array(20)).map((_, i : number) => (
                    <Skeleton variant="rectangular" width={'100%'} height={30} key={i}/>
                ))
            }
        </StyledSize>
    )
}