import React from "react";
import {Container, ListGroup, ListGroupItem, Button,
    CardHeader, CardBody, Card, CardFooter, Row, Col} from "reactstrap"

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                height={80}
                                src={item.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>price: ${item.productPrice}</span>
                                <Button color="danger" onClick={() => removeItem(item)}>
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/*If everything is empty*/}
            {
                cartItem.length >= 1 ? () : ()
            }
        </Container>
    )

}

export default Cart;