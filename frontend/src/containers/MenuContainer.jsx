import React, { Component } from 'react';
import Drink from '../components/Drink'
import OrderContainer from './OrderContainer'
import { Grid, Segment } from 'semantic-ui-react'

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
            
            <Grid columns='equal'>
                {/* <Grid.row/> */}
                <Grid.Column/>
                <Grid.Column width={8}>
                    <Segment>
                        <div className='menu'>
                            {drinkComponentArray}
                        </div>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Segment>
                            <OrderContainer orders={this.state.orders}/>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }

}

export default MenuContainer;