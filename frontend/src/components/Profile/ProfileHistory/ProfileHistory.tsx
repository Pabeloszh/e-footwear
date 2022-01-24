import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';
import { HistoryItem } from './HistoryItem';
import { StyledHistory } from "./ProfileHistory.style"
import { HistoryItemSkeleton } from './HistoryItemSkeleton';
import { Skeleton } from '@mui/material';

export const ProfileHistory:React.FC = () => {
    const authToken = useSelector((state : RootState) => state.auth);
    const [orders, setOrders] = useState<any>(null)

    useEffect(() => {
        axios.get('https://efootwear.herokuapp.com/api/orders/', {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }).then(({data}) => {
            setOrders(data);
        })
    }, [])

    return (
        <StyledHistory>
            <h2>Purchase History</h2>
            {orders 
                ? orders.map((el : any) => (
                    <div key={el.id}>
                        <div className='header'>
                            <h4>{el.date_ordered.split('T')[0]}</h4>
                            <p>{el.completed ? 'completed' : 'in progress'}</p>
                            <h4>{el.total_value}zł</h4>
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
                : <div>
                    <div className='header'>
                        <h4><Skeleton width={80}/></h4>
                        <p><Skeleton width={60}/></p>
                        <h4><Skeleton width={65}/></h4>
                    </div>
                    <HistoryItemSkeleton/>
                    <hr />
                    <HistoryItemSkeleton/>
                </div>
            }
        </StyledHistory>
    )
}