import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { value: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Confirm" />
                    <List>
                        <ListItem
                            primaryText="First name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
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
export default Confirm;
