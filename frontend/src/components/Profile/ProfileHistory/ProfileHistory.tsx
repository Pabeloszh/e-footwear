import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';
import axios from 'axios';
import { Skeleton } from '@mui/material';
import { HistoryItem } from './HistoryItem';
import { HistoryItemSkeleton } from './HistoryItemSkeleton';
import { OrderProps } from './ProfileHistory.interfaces';
import { StyledHistory } from "./ProfileHistory.style"

export const ProfileHistory:React.FC = () => {  
    const [orders, setOrders] = useState<OrderProps | null[] | null>(null)
    const authToken = useSelector((state : RootState) => state.auth);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/orders/`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }).then(({data}) => {
            setOrders(data);
        })
    }, [])

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
                    ? <p>You didn't purchase anything</p>
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
    )
}