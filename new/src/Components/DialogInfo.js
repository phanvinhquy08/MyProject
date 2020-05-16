import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux';

import { closeDialogInfo } from '../Action/actions';


const DialogList = (props) => {
  const { open, dataHotel, closeDialogInfo } = props;
  console.log(dataHotel.imageUrl)
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ textAlign: "center" }} id="alert-dialog-title">{`${dataHotel.name}'s detail`}</DialogTitle>
        <CardMedia
          style={{height:140}}
          image={dataHotel.imageUrl}
          title="Contemplative Reptile"
        />
        <DialogContent>
          <ListItem>Slogan: {dataHotel.sloganBig}</ListItem>
          <ListItem>Email: {dataHotel.email}</ListItem>
          <ListItem>Address: {dataHotel.address}</ListItem>
          <ListItem>Check in hour: {dataHotel.checkinHours}</ListItem>
          <ListItem>Tel: {dataHotel.tel}</ListItem>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Edit
          </Button >
          <Button color="primary" onClick={closeDialogInfo}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
const mapStateToProps = ({ dialogInfoState: { open, dataHotel } }) => {
  return { open, dataHotel }
}

const mapDispatchToProps = { closeDialogInfo }

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);