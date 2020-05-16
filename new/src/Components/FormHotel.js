import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import axios from 'axios';

import { closeForm, getHotels, submitForm } from '../Action/actions';


const FormHotel = (props) => {
    const { isOpen, closeForm, getHotels, submitForm } = props;




    return (
        <div>
            <Dialog open={isOpen} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new hotel</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="sloganBig"
                        label="Slogan"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        margin="dense"
                        id="address"
                        label="tel"
                        type="tel"
                        fullWidth
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={closeForm}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={submitForm}>
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
const mapStateToProps = ({ dialogFormState: { isOpen, name, sloganBig, email, address, checkinHours, tel } }) => {
    return { isOpen, name, sloganBig, email, address, checkinHours, tel };
}

const mapDispatchToProps = {
    closeForm, getHotels,submitForm
}



export default connect(mapStateToProps, mapDispatchToProps)(FormHotel);
