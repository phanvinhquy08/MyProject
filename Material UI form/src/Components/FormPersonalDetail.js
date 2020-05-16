import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetail extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { value , handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter Personal Detail"/>
                    <TextField 
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={value.occupation}
                    autoFocus
                    />
                    <br/>
                    <TextField 
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={value.city}
                    />
                    <br/>
                    <TextField 
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={value.bio}
                    />
                    <br/>
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={style.button}
                    onClick={this.continue}
                    />
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={style.button}
                    onClick={this.back}
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
export default FormPersonalDetail;
