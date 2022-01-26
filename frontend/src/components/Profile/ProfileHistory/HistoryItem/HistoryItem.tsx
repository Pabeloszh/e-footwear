import React from 'react'
import { capitalizeFirstLetter } from '../../../../utils'
import { HistoryItemInterfaces } from './HistoryItem.interfaces'
import { StyledItem } from "./HistoryItem.style"

export const HistoryItem = ({item} : HistoryItemInterfaces) => {
    return (
        <StyledItem>
            <img src={require(`../../../../img/product-photos/${item.color}/1.jpg`).default}  alt="" />
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