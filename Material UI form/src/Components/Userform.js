import React, { Component } from 'react'

import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';

export class Userform extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {
        const { step, firstName, lastName, email, occupation, city, bio } = this.state;
        const value = { firstName, lastName, email, occupation, city, bio };
        switch (step) {
            case 1:
                return <FormUserDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    value={value}
                />
            case 2:
                return <FormPersonalDetail
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    prevStep={this.prevStep}
                    value={value}
                />
            case 3:
                return <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                value={value}
            />
            case 4:
                return <Success />
        }
    }
}

export default Userform;

