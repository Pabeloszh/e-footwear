import React from 'react'
import { Skeleton } from '@mui/material'
import { StyledItem } from "../HistoryItem/HistoryItem.style"

export const HistoryItemSkeleton:React.FC = () => {
    return (
        <StyledItem>
            <Skeleton variant="rectangular" width={195} height={150}/>
            <div className="info">
                <div>
                    <h4><Skeleton width={125}/></h4>
                    <div>
                        <p><Skeleton width={90}/></p>
                    </div>
                    <div>
                        <p><Skeleton width={90}/></p>
                        <p><Skeleton width={90}/></p>
                    </div>
                </div>
                <h4><Skeleton width={80}/></h4>
            </div>
        </StyledItem>
    )
}