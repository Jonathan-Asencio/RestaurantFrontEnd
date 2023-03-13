import React from 'react'
import './OrdersTable.css'
import { useState } from 'react'
import Order from '../OrdersModel'
import TestOrders from '../TestOrders'
import List from '@mui/material/List';
import { IconButton, ListItem, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export default function OrdersTable() {
    const [orders, setOrders] = useState<Order[]>(TestOrders)

    function onOrderComplete(name: string){
        var newOrders = orders.filter((order) => {
            return order.name !== name
        });

        setOrders(newOrders)
    }

    function getTotalPrice(order: Order): number{
        var total: number = 0

        order.items.map((Item) => {
            return total = total + Item.price
        })

        return total
    }

    return (
        <div className='ordersTable'>
            <h2 className='header'>Orders</h2>
            <List className='List'>
                {orders.map((_order) => {
                    return (
                        <ListItem className='ListItem'
                            secondaryAction={
                                <IconButton onClick={() => {onOrderComplete(_order.name)}} edge="end" aria-label="complete">
                                    <DeleteIcon></DeleteIcon>
                                </IconButton>
                            }>

                            <ListItemText 
                                primary={_order.name}
                                secondary={`Price: ${getTotalPrice(_order)}` }
                            />
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}