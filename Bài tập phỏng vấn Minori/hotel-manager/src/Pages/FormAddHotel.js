import React, { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'querystring';
import { Redirect } from 'react-router';

import FormGroupInput from '../Components/FormGroupInput';
import './FormAddHotel.css';


const FormCreatHotel = () => {
    const { register, handleSubmit, errors } = useForm();
    const [fireRedirect, setFireRedirect] = useState(false);

    const onSubmit = data => {
        axios.post('http://5e633910f48bc60014536a40.mockapi.io/api/hotels', qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(() => {
                setFireRedirect(true);
            })
    };

    return (
        <Container>
            <Row className="justify-content-center py-2">
                <Col sm="6" className='CardHotel'>
                    <Card>
                        <CardHeader><h4 className="text-center">Add new hotel</h4></CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit(onSubmit)} className="FormCreatHotel">
                                <FormGroupInput
                                    label="Name:"
                                    name="name"
                                    innerRef={register({
                                        required: 'This field is required'
                                    })}
                                    errors={errors}
                                />
                                <FormGroupInput
                                    label="Address:"
                                    name="address"
                                    innerRef={register({
                                        required: 'This field is required'
                                    })}
                                    errors={errors}
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
                                />
                                <FormGroupInput
                                    label="Slogan Big:"
                                    name="sloganBig"
                                    innerRef={register({
                                        required: 'This field is required'
                                    })}
                                    errors={errors}
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
                                />
                                <Button type="submit" color="primary">Submit</Button>
                                <Button type="reset">Reset</Button>
                            </Form>
                            {fireRedirect && <Redirect to={'/'} />}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default FormCreatHotel;