import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import axios from 'axios';

import CardHotel from '../Components/CardHotel';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: []
        }
    }
    componentDidMount() {
        axios.get('http://5e633910f48bc60014536a40.mockapi.io/api/hotels')
            .then(res => {
                this.setState({
                    hotels: res.data
                })
            });
    }
    onDeleteItem(hotel) {
        const { hotels } = this.state;
        axios.delete('http://5e633910f48bc60014536a40.mockapi.io/api/hotels/' + hotel.id)
            .then(res => {
                this.setState({
                    hotels: hotels.filter(x => x.id !== res.data.id)
                })
            })

    }
    render() {
        const { hotels } = this.state;
        return (
            <Container>
                <h2 class='text-center'>List hotels</h2>
                <Row>
                    {hotels.map((hotel, key) =>
                        <CardHotel key={key} hotel={hotel} onClick={() => this.onDeleteItem(hotel)} />
                    )}
                </Row>
            </Container>
        );
    }

}