import { useQuery } from '../../../utils';
import { ColorInterfaces } from './Color.interfaces'
import { StyledColor } from "./Color.style"
import { useHistory } from 'react-router-dom';
import { Skeleton } from '@mui/material';

export const Color = ({ colors } : ColorInterfaces) => {
    const query = useQuery()
    const history = useHistory()

    function setColor(el : string){
        query.set('color', el)
        history.replace({
            search: query.toString(),
        })
    }

    return (
        <StyledColor>
            {colors 
                ? colors.map(el => (
                    <img 
                        className={query.get('color') == el ? 'active' : undefined} loading="lazy" 
                        src={require(`../../../img/product-photos/${el}/1.jpg`).default} 
                        alt="product-image" 
                        onClick={() => setColor(el)}
                        key={el}
                    />
                ))
                : Array.apply(null, Array(3)).map(() => (
                    <Skeleton variant="rectangular" width={70} height={70} />
                ))
            }
        </StyledColor>
    )
}

