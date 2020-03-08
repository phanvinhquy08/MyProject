import React, { useState } from 'react';
import { Button, Form, Container, Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'querystring';
import { Redirect } from 'react-router';

import FormGroupInput from '../Components/FormGroupInput';
import CarouselHotel from '../Components/CarouselHotel';
import './Detail.css'

const Detail = props => {
    const [disabled, setDisabled] = useState(true);
    const hotel = props.location.state.data;
    const { register, handleSubmit, errors } = useForm();
    const [fireRedirect, setFireRedirect] = useState(false);

    const onSubmit = data => {
        axios.put('http://5e633910f48bc60014536a40.mockapi.io/api/hotels/' + hotel.id, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((res) => {
                console.log(res.data);
                setFireRedirect(true);
            })
    };

    const onClickEdit = () => {
        setDisabled(!disabled);
    }

    return (
        <Container>
            <h2 className="text-center">{`Detail for ${hotel.name}`}</h2>
            <Row className="py-2">
                <Col sm='6'>
                    <CarouselHotel data={hotel} />
                </Col>
                <Col sm='6'>
                    <Form onSubmit={handleSubmit(onSubmit)} className="FormEdit">
                        <FormGroupInput
                            label="Name:"
                            name="name"
                            innerRef={register({
                                required: 'This field is required'
                            })}
                            errors={errors}
                            defaultValue={hotel.name}
                            disabled={disabled}
                        />
                        <FormGroupInput
                            label="Address:"
                            name="address"
                            innerRef={register({
                                required: 'This field is required'
                            })}
                            errors={errors}
                            defaultValue={hotel.address}
                            disabled={disabled}
                        />
                        <FormGroupInput
                            label="Email:"
                            name="email"
                            innerRef={register({
                                required: 'This field is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })}
                            errors={errors}
                            defaultValue={hotel.email}
                            disabled={disabled}
                        />
                        <FormGroupInput
                            label="Check in hours:"
                            name="checkinHours"
                            innerRef={register({
                                required: 'This field is required',
                                pattern: {
                                    value: /^\d{1}$|^[1]{1}\d{1}$|^[2]{1}[0-4]{1}$/,
                                    message: "hour must be 0 - 24"
                                }
                            })}
                            errors={errors}
                            defaultValue={hotel.checkinHours}
                            disabled={disabled}
                        />
                        <FormGroupInput
                            label="Slogan Big:"
                            name="sloganBig"
                            innerRef={register({
                                required: 'This field is required'
                            })}
                            errors={errors}
                            defaultValue={hotel.sloganBig}
                            disabled={disabled}
                        />
                        <FormGroupInput
                            label="Telephone:"
                            name="tel"
                            innerRef={register({
                                required: 'This field is required',
                                pattern: {
                                    value: /^0[0-9]{8}/,
                                    message: "Invalid telephone number"
                                }
                            })}
                            errors={errors}
                            defaultValue={hotel.tel}
                            disabled={disabled}
                        />
                        <Button type="button" color="primary" onClick={onClickEdit}>Edit</Button>
                        <Button type="submit">Done</Button>
                    </Form>
                    {fireRedirect && <Redirect to={'/'} />}
                </Col>
            </Row>
        </Container>
    )
}
export default Detail;