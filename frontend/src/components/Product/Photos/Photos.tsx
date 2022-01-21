import React from 'react'
import { useQuery } from '../../../utils'
import { StyledPhotos } from "./Photos.style"

export const Photos:React.FC = () => {
    const query = useQuery()

    return (
        <StyledPhotos>
            <img loading="lazy" src={require(`../../../img/product-photos/${query.get('color')}/1.jpg`).default} alt="product-image"/>
            <div>
                <img loading="lazy" src={require(`../../../img/product-photos/${query.get('color')}/2.png`).default} alt="product-image"/>
                <img loading="lazy" src={require(`../../../img/product-photos/${query.get('color')}/3.png`).default} alt="product-image"/>
                {/* <img loading="lazy" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="product-image"/> */}
            </div>
        </StyledPhotos>
    )
}