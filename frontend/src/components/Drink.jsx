import React from 'react'

class Drink extends React.Component {

    render() {

        let {name, image, price} = this.props.drink

        return (
           <div className="drink-card">
               <h3>{name}</h3>
               <img src={image} alt={name} />
               <p>{price}</p>
               <button>Add to Order</button>
           </div>
        )

    }
}

export default Drink;