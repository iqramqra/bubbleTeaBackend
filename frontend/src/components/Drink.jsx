import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Drink extends React.Component {

    handleClick = () => {
        this.props.addToOrder(this.props.drink)
    }

    render() {
        let {name, image, price} = this.props.drink
        return (
            <Card>
                <Image src={image} wrapped ui={true} />
                <Card.Content>
                <Card.Header>{name} | ${price}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Button animated='vertical' onClick={this.handleClick}>
                        <Button.Content hidden>Add</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                </Card.Content>
            </Card> 
        )
    }
}

export default Drink;