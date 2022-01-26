import React from 'react'
import { Skeleton } from '@mui/material';
import { StyledItem } from "../LikedItem/LikedItem.style"

export const LikedItemSkeleton:React.FC = () => {

    return (
        <StyledItem>
            <Skeleton variant="rectangular" width={195} height={150}/>
            <div className="info">
                <div>
                    <Skeleton width={125}/>
                    <Skeleton width={90}/>
                    <Skeleton width={50}/>
                </div>
                <Skeleton width={80} height={35}/>
            </div>
        </StyledItem>
    )
}

