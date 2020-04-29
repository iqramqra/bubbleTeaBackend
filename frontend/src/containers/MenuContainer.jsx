import React, { Component } from 'react';
import Drink from '../components/Drink'

class MenuContainer extends Component {

    render() {

        let drinkComponentArray = this.props.drinks.map(drink => {
            return (
                <Drink 
                    key={drink.id}
                    drink={drink}
                />
            )
        })

        return (
            <div className="menu">
                <h2>Drinks Menu</h2>
                {drinkComponentArray}
            </div>
        );
    }

}

export default MenuContainer;