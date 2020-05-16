import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import axios from 'axios';

import { closeDialogDelete, getHotels } from '../Action/actions'


const DialogDelete = (props) => {
  const { isOpen, closeDialogDelete, dataHotelDel, listHotels, getHotels } = props;

  const deleteHotel = () => {
    axios.delete("http://5e633910f48bc60014536a40.mockapi.io/api/hotels/" + dataHotelDel.id)
    .then(() => {
      getHotels();
    })
  }


  return (
    <>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ textAlign: "center" }} id="alert-dialog-title">{`Delete ${dataHotelDel.name} ?`}</DialogTitle>
        <DialogActions>
          <Button color="primary" onClick={closeDialogDelete}>
            About
          </Button >
          <Button color="primary" onClick={() => {
            closeDialogDelete();
            deleteHotel(listHotels, dataHotelDel)
          }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
const mapStateToProps = ({ dialogDeleteState: { isOpen, dataHotelDel }, hotelState: { listHotels } }) => {
  return { isOpen, dataHotelDel, listHotels };
}

const mapDispatchToProps = {
  closeDialogDelete, getHotels
}


export default connect(mapStateToProps, mapDispatchToProps)(DialogDelete);