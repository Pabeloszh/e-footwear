import { OrderSearch } from '../../components/OrderDetail/OrderSearch';
import { OrderData } from '../../components/OrderDetail/OrderData';
import { StyledOrderDetail } from './OrderDetail.style';


export const OrderDetail = () => {
    return (
        <StyledOrderDetail>
            <OrderSearch/>
            <OrderData/>
        </StyledOrderDetail>
    );
};