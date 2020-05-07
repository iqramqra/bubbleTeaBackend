import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class PastOrder extends React.Component {

    render() {
        let {name, image, price} = this.props.order.drink
        return (
            <div>
                <Card>
                    <Image src={image} wrapped ui={true} />
                    <Card.Content>
                    <Card.Header>{name} | ${price}</Card.Header>
                    </Card.Content>
                </Card> 
            </div>
        )
    }
}

export default PastOrder;