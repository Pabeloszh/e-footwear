import { HistoryItemInterfaces } from './HistoryItem.interfaces'
import { StyledItem } from "./HistoryItem.style"
import { capitalizeFirstLetter } from '../../../../utils'

export const HistoryItem = ({ item } : HistoryItemInterfaces) => {
    const { color, model, quantity, size, discount_price, price} = item

    return (
        <StyledItem>
            <img src={require(`../../../../img/product-photos/${color}/1.jpg`).default}  alt="" />
            <div className="info">
                <div>
                    <h4>{model}</h4>
                    <div>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div>
                        <p>Color: {capitalizeFirstLetter(color)}</p>
                        <p>Size: {size}</p>
                    </div>
                </div>
                <h4>{discount_price || price}zł</h4>
            </div>
        </StyledItem>
    )
}