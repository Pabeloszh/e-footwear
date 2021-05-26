import React from 'react';
import { HistoryItem } from './HistoryItem';
import { StyledHistory } from "./ProfileHistory.style"

export const ProfileHistory:React.FC = () => {
    return (
        <StyledHistory>
            <h2>Purchase History</h2>
            <HistoryItem/>
            <hr/>
            <HistoryItem/>
            <hr/>
            <HistoryItem/>
            <hr/>
        </StyledHistory>
    )
}