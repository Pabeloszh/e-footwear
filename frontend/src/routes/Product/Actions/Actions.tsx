import React from 'react'
import { Button } from '@material-ui/core';
import { StyledActions } from "./Action.style"

export const Actions:React.FC = () => {
    return (
        <StyledActions>
            <Button variant="contained" color="primary">
                Buy now
            </Button>
            <Button variant="contained" color="primary">
                Add to list
            </Button>
        </StyledActions>
    )
}