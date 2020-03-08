import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";


import './CardHotel.css';

export default class CardHotel extends Component {
    render() {
        const { hotel, onClick } = this.props;
        return (
            <Col sm="4" className='CardHotel'>
                <Card>
                    <Link to={{
                        pathname: '/detail',
                        state: {
                            data: hotel
                        }
                    }}>
                        <CardImg top width="100%" src={hotel.imageUrl} alt="Card image cap" />
                    </Link>

                    <CardBody>
                        <CardTitle>
                            <h4>{hotel.name}</h4>
                        </CardTitle>
                        <CardText>{hotel.description}</CardText>
                        <Link to={{
                            pathname: '/detail',
                            state: {
                                data: hotel
                            }
                        }}>
                            <Button color="primary">
                                Details
                            </Button>
                        </Link>
                        <Button color="danger" onClick={onClick}>Delete</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}