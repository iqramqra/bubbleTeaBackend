import React, { Component } from 'react';

class Order extends Component {

    render() {

        let { name, price } = this.props.order

        return (
            <div className="cart-order">
                <h5>{name} : ${price}</h5>
            </div>
        );
    }

}

export default Order;