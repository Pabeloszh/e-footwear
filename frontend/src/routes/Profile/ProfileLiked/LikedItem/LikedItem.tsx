import React from 'react'
import { StyledItem } from "./LikedItem.style"

export const LikedItem:React.FC = () => {
    return (
        <StyledItem>
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
            <div className="info">
                <div>
                    <h4>All Star Black Sneakers</h4>
                    <p>Nike Sneakers</p>
                    <p>Unlike</p>
                </div>
                <h4>299.99zł</h4>
            </div>
        </StyledItem>
    )
}

