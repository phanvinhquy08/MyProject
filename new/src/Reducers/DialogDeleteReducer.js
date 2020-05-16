import { OPEN_DIALOG_DELETE, CLOSE_DIALOG_DELETE } from '../Action/actions'
const defaultState = {
    isOpen: false,
    dataHotelDel: {}
}
const reducer = (state = defaultState, action) => {
    if (action.type === OPEN_DIALOG_DELETE) {
        return { ...state, isOpen: true, dataHotelDel: action.payload }
    }
    if (action.type === CLOSE_DIALOG_DELETE) {
        return { ...state, isOpen: false }
    }
    return state;
}
export default reducer;
