import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Success" />
                    <h4>Thank you for your submition</h4>
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
export default Success;
