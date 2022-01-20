import React from 'react'
import { capitalizeFirstLetter } from '../../../../utils'
import { HistoryItemInterfaces } from './HistoryItem.interfaces'
import { StyledItem } from "./HistoryItem.style"

export const HistoryItem = ({item} : HistoryItemInterfaces) => {
    return (
        <StyledItem>
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
            <div className="info">
                <div>
                    <h4>{item.model}</h4>
                    <div>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    <div>
                        <p>Color: {capitalizeFirstLetter(item.color)}</p>
                        <p>Size: {item.size}</p>
                    </div>
                </div>
                <h4>{item.discount_price || item.price}zł</h4>
            </div>
        </StyledItem>
    )
}