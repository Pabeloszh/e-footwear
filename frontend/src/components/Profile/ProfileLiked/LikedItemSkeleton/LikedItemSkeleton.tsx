import React from 'react'
import { Skeleton } from '@mui/material';
import { StyledItem } from "../LikedItem/LikedItem.style"

export const LikedItemSkeleton:React.FC = () => {

    return (
        <StyledItem>
            <Skeleton variant="rectangular" width={195} height={150}/>
            <div className="info">
                <div>
                    <h4><Skeleton width={125}/></h4>
                    <p><Skeleton width={90}/></p>
                    <p><Skeleton width={50}/></p>
                </div>
                <h4><Skeleton width={80}/></h4>
            </div>
        </StyledItem>
    )
}

