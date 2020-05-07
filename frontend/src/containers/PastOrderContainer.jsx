import React, { Component } from 'react';
import PastOrder from '../components/PastOrder'

class PastOrderContainer extends Component {

    render() {
        let pastOrderComponentArray = this.props.order.drink_orders.map(order => {
            return <PastOrder key={order.id} drink={order.drink}/>
        })

        return (
            <div>
                {pastOrderComponentArray}
            </div>
        )
    }

}
export default PastOrderContainer