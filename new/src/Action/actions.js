import axios from 'axios';

export const SET_LOADING = 'SET_LOADING';
export const GET_HOTEL = 'GET_HOTEL';
export const OPEN_DIALOG_INFO = 'OPEN_DIALOG_INFO';
export const CLOSE_DIALOG_INFO = 'CLOSE_DIALOG_INFO';
export const OPEN_DIALOG_DELETE = 'OPEN_DIALOG_DELETE';
export const CLOSE_DIALOG_DELETE = 'CLOSE_DIALOG_DELETE';
export const DELETE_HOTEL = 'DELETE_HOTEL';
export const ADD_NEW_HOTEL = 'ADD_NEW_HOTEL';
export const OPEN_FORM = 'OPEN_FORM';
export const CLOSE_FORM = 'CLOSE_FORM';
export const SUBMIT_FORM = 'SUBMIT_FORM';
// action loading của reducer show list
const setLoading = () => {
    return { type: SET_LOADING };
}
// action get data cho list
const getHotels = () => async (dispatch) => {
    dispatch(setLoading());
    const res = await axios.get("http://5e633910f48bc60014536a40.mockapi.io/api/hotels");
    dispatch({ type: GET_HOTEL, payload: res.data })
}
//  action open dialog show info nằm ở componet list
const openDialogInfo = ({ name, sloganBig, email, address, checkinHours, tel, imageUrl }) => {
    return { type: OPEN_DIALOG_INFO, payload: { name, sloganBig, email, address, checkinHours, tel, imageUrl } }
}
// action close dialog info nằm ở component dialoginfo
const closeDialogInfo = () => {
    return { type: CLOSE_DIALOG_INFO };
}
//  action open dialog del nằm ở component list
const openDialogDelete = (hotel) => {
    return { type: OPEN_DIALOG_DELETE, payload: hotel }
}
// action close dialog del nằm ở component dialogdelete
const closeDialogDelete = () => {
    return { type: CLOSE_DIALOG_DELETE }
}
// action thêm 1 hotel nằm ở componennt menubar
const openForm = ({ name, sloganBig, email, address, checkinHours, tel }) => {
    return { type: OPEN_FORM, payload: { name, sloganBig, email, address, checkinHours, tel } }
}
//  action closeform thêm hotel, nằm ở component form
const closeForm = () => {
    return { type: CLOSE_FORM }
}
//  action submit form , năm ở componet form
const submitForm = ({ name, sloganBig, email, address, checkinHours, tel }) => {
    return { type: SUBMIT_FORM, payload: { name, sloganBig, email, address, checkinHours, tel } }
}



export { setLoading, getHotels, openDialogInfo, closeDialogInfo, closeDialogDelete, openDialogDelete, openForm, closeForm, submitForm };

