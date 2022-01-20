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
                <Accordion>
                    <AccordionSummary
                    expandIcon={<p>^</p>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    {/* <Typography></Typography>
                    <Typography>{el.date_ordered.split('T')[0]}</Typography> */}
                    {/* @ts-ignore */}
                    <Typography>
                        {el.date_ordered.split('T')[0]}
                    </Typography>
                    {/* @ts-ignore */}
                    <Typography>{el.completed ? 'completed' : 'in progress'}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {el.order_items.map((item : any) => (
                            <>
                                <HistoryItem item={item}/>
                                <hr/>
                            </>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </StyledHistory>
    )
}