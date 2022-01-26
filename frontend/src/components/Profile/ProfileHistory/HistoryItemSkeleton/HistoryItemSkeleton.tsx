import React from 'react'
import { Skeleton } from '@mui/material'
import { StyledItem } from "../HistoryItem/HistoryItem.style"

export const HistoryItemSkeleton:React.FC = () => {
    return (
        <StyledItem>
            <Skeleton variant="rectangular" width={195} height={150}/>
            <div className="info">
                <div>
                    <Skeleton width={125}/>
                    <div>
                        <Skeleton width={90}/>
                    </div>
                    <div>
                        <Skeleton width={90}/>
                        <Skeleton width={90}/>
                    </div>
                </div>
                <Skeleton width={80}/>
            </div>
        </StyledItem>
    )
}