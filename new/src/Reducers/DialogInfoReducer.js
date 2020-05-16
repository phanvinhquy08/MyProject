import { OPEN_DIALOG_INFO, CLOSE_DIALOG_INFO } from '../Action/actions'
const defaultState = {
    open: false,
    dataHotel: {}
}
const reducer = (state = defaultState, action) => {
    if (action.type === OPEN_DIALOG_INFO) {
        return { ...state, open: true, dataHotel: action.payload }
    }
    if (action.type === CLOSE_DIALOG_INFO) {
        return { ...state, open: false }
    }
    return state;
}
export default reducer;