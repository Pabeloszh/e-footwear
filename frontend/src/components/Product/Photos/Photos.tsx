import { Skeleton } from '@mui/material'
import { PhotosInterfaces } from './Photos.interfaces'
import { StyledPhotos } from "./Photos.style"
import { useQuery } from '../../../utils'

export const Photos = ({ product } : PhotosInterfaces) => {
    const query = useQuery()

    return (
        <StyledPhotos>
            {product
                ? <>
                    <img loading="lazy" src={require(`../../../img/product-photos/${query.get('color')}/1.jpg`).default} alt="product-image"/>
                    <div>
                        <img loading="lazy" src={require(`../../../img/product-photos/${query.get('color')}/2.png`).default} alt="product-image"/>
                        <img loading="lazy" src={require(`../../../img/product-photos/${query.get('color')}/3.png`).default} alt="product-image"/>
                    </div>
                </> 
                : <>
                    <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
                    <div>
                        <Skeleton variant="rectangular" width={'100%'} height={200} />
                        <Skeleton variant="rectangular" width={'100%'} height={200} />
                    </div>
                </> 
            }
        </StyledPhotos>
    )
}