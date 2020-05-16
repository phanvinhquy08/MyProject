import { OPEN_FORM, CLOSE_FORM, SUBMIT_FORM } from '../Action/actions';
const defaultState = {
    isOpen: false,
    name: '',
    email: '',
    sloganBig: '',
    checkinHours: '',
    tel: '',
    address: ''
}
const reducer = (state = defaultState, action) => {
    if (action.type === OPEN_FORM) {
        return {...state, isOpen: true };
    }
    if (action.type === CLOSE_FORM) {
        return {...state, isOpen: false};
    }
    if (action.type === SUBMIT_FORM) {
        return {...state, ...action.payload}
    }
    return state;
}
export default reducer;