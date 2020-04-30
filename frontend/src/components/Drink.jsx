import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Drink extends React.Component {

    render() {

        let {name, image, price} = this.props.drink

        return (

            <Card>
                <Image src={image} wrapped ui={true} />
                <Card.Content>
                <Card.Header>{name} | ${price}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                <a>
                    {/* <Icon name='user' /> */}
                    {/* <button>Add to Order</button> */}

                    <Button animated='vertical'>
                        <Button.Content hidden>Add</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                </a>
                </Card.Content>
            </Card>
         
        //    <div className="drink-card">
        //        <h3>{name}</h3>
        //        <img src={image} alt={name} />
        //        <p>${price}</p>
        //        <button>Add to Order</button>
        //    </div>
        )

    }
}

export default Drink;