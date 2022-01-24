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
            </div>
        </StyledPhotos>
    )
}