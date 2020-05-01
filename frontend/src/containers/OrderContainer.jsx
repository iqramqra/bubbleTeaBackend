import React, { Component } from 'react';
import Order from '../components/Order'

class OrderContainer extends Component {

    render() {

        let totalSum = this.props.orders.reduce((acc, order) => {
            return acc + order.price
        }, 0)

        let orderComponentArray = this.props.orders.map((order, index) => {
            return (
                <Order 
                    key={index}
                    order={order}
                />
            )
        })


        return (
            <div className="cart">
                <h3>Orders:</h3>
                {orderComponentArray}
                <h4>Total: ${totalSum}</h4>
            </div>
        );
    }

}

export default OrderContainer;