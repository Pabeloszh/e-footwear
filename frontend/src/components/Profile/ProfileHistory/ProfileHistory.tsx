import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/reducers';
import { HistoryItem } from './HistoryItem';
import { StyledHistory } from "./ProfileHistory.style"

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
            console.log(data);
        })
    }, [])

    return (
        <StyledHistory>
            <h2>Purchase History</h2>
            {orders && orders.map((el : any) => (
                <div>
                    <div className='header'>
                        <h4>{el.date_ordered.split('T')[0]}</h4>
                        <p>{el.completed ? 'completed' : 'in progress'}</p>
                        <h4>{el.total_value}zł</h4>
                    </div>
                    {el.order_items.map((item : any, i : number) => (
                        <>
                            <HistoryItem item={item}/>
                            {i + 1 < el.order_items.length && <hr className="item-hr"/>}
                        </>
                    ))}
                    <hr />
                </div>
            ))}
        </StyledHistory>
    )
}