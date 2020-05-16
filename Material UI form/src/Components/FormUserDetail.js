import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetail extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { value , handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter User Detail"/>
                    <TextField 
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={value.firstName}
                    autoFocus
                    />
                    <br/>
                    <TextField 
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={value.lastName}
                    />
                    <br/>
                    <TextField 
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={value.email}
                    />
                    <br/>
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={style.button}
                    onClick={this.continue}
                    />
                </>
            </MuiThemeProvider>
        )
    }
}

const style = {
    button: {
        margin: 15
    }
}
export default FormUserDetail;
