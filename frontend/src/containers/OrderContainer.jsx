import React, { Component } from 'react';
import Order from '../components/Order'

class OrderContainer extends Component {

    handleClick = () => {
        const drink_ids = this.props.orders.map(drink => drink.id)
        fetch("http://localhost:3000/orders",{
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${this.props.token}`
            },
            body: JSON.stringify({
                drink_ids: drink_ids
            })
        })
    }

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
                <button onClick={this.handleClick}>
                    Place Order
                </button>
            </div>
        );
    }

}

export default OrderContainer;