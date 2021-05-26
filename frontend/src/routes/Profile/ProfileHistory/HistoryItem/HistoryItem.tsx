import React from 'react'
import { StyledItem } from "./HistoryItem.style"

export const HistoryItem:React.FC = () => {
    return (
        <StyledItem>
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
            <div className="info">
                <div>
                    <h4>All Star Black Sneakers</h4>
                    <div>
                        <p>Quantity: 1</p>
                        <p>Date: 26-05-2021</p>
                    </div>
                    <div>
                        <p>Color: Black</p>
                        <p>Size: 42</p>
                    </div>
                </div>
                <h4>299.99zł</h4>
            </div>
        </StyledItem>
    )
}