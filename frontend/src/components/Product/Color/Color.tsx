import { useQuery } from '../../../utils';
import { ColorInterfaces } from './Color.interfaces'
import { StyledColor } from "./Color.style"
import { useHistory } from 'react-router-dom';

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
            {colors.map(el => (
                <img 
                    className={query.get('color') == el ? 'active' : undefined} loading="lazy" 
                    src={require(`../../../img/product-photos/${el}/1.jpg`).default} 
                    alt="product-image" 
                    onClick={() => setColor(el)}
                />
            ))}
        </StyledColor>
    )
}

