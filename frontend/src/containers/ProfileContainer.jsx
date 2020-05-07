import React, { Component } from 'react';
import PastOrder from '../components/PastOrder'

class ProfileContainer extends Component {

    state = {
        orders: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/drink_orders")
        .then(r=> r.json())
        .then((ordersArray) => {
            let filteredArray = ordersArray.filter(order => {
                return order.user === this.props.user.username
            })
            this.setState({
                orders: filteredArray.reverse()
            })
        })
    }

    render() {
        let pastOrderComponentArray = this.state.orders.map(order => {
            return (
                <PastOrder 
                    key={order.id} 
                    order={order} 
                />
            )
        })

        return (
            <div className="profile">
                <h2>Welcome back, {this.props.user.username}!</h2>
                <h5>Past Orders:</h5>
                {pastOrderComponentArray}
            </div>
        );
    }

}

export default ProfileContainer;