import React, { Component } from 'react';
import Drink from '../components/Drink'
import OrderContainer from './OrderContainer'

class MenuContainer extends Component {

    state = {
        orders: []
    }

    addToOrder = (newOrderObject) => {
        const newOrders = [...this.state.orders, newOrderObject]
        this.setState({
          orders: newOrders
        })
    }

    render() {
        console.log(this.state.orders)
        let drinkComponentArray = this.props.drinks.map(drink => {
            return (
                <Drink 
                    key={drink.id}
                    drink={drink}
                    addToOrder={this.addToOrder}
                />
            )
        })

        return (
            <div className="menu">
                <h2>Drinks Menu</h2>
                {drinkComponentArray}
                <OrderContainer orders={this.state.orders}/>
            </div>
        );
    }

}

export default MenuContainer;