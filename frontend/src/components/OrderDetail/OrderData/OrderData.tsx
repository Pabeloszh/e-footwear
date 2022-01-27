import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { HistoryItemSkeleton } from '../../Profile/ProfileHistory/HistoryItemSkeleton';
import { HistoryItem } from '../../Profile/ProfileHistory/HistoryItem';
import { OrderProps } from '../../Profile/ProfileHistory/ProfileHistory.interfaces';
import { StyledHistory } from '../../Profile/ProfileHistory/ProfileHistory.style';
export const OrderData:React.FC = () => {
  let { id } = useParams() as {
    id: string;
  }
  const [orders, setOrders] = useState<OrderProps | null[] | null>(null)

  const dispatch = useDispatch();
  const { setAlert } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if(id){
        axios.get(`${process.env.REACT_APP_API_KEY}/orders/order_detail/?order_number=${id}`)
        .then(({data}) => {
            setOrders(data);
        })
        .catch(() => {
            setOrders([])
            setAlert({message: 'We could not find an order with the matching id', type: 'error'})
        })
    }
    if(!id){
      setOrders([])
    }
  }, [id])

  return (
    <StyledHistory>
        {!orders
                ? <div>
                    <div className='header'>
                        <Skeleton width={80}/>
                        <Skeleton width={60}/>
                        <Skeleton width={65}/>
                    </div>
                    <HistoryItemSkeleton/>
                    <hr />
                    <HistoryItemSkeleton/>
                </div>
                : !orders.length 
                    ? <p>Sorry, we do not have matching order </p>
                    //@ts-ignore
                    : orders.map((el : any) => (
                        <div key={el.id}>
                            <div className='header'>
                                <h4>{el.date_ordered.split('T')[0]}</h4>
                                <p>{el.completed ? 'completed' : 'in progress'}</p>
                                <h4>{el.total_value.toFixed(2)}zł</h4>
                            </div>
                            {el.order_items.map((item : any, i : number) => (
                                <React.Fragment key={`${el.id}-${item.id}`}>
                                    <HistoryItem item={item}/>
                                    {i + 1 < el.order_items.length && <hr className="item-hr"/>}
                                </React.Fragment>
                            ))}
                            <hr />
                        </div>
                    )) 
            }
    </StyledHistory>
  );
};
