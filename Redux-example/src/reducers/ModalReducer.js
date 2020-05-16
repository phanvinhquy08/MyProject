import { MODAL_OPEN, MODAL_CLOSE } from '../Action';

const defaultState = {
    isOpen: false,
    name: "",
    text: ""
}
const reducer = (state = defaultState, action) => {
    if (action.type === MODAL_CLOSE) {
        return { ...state, isOpen: false, name: "", text: "" }
    }
    if (action.type === MODAL_OPEN) {
        return { ...state, isOpen: true, name: action.payload.name, text: action.payload.text }
    }
    return state;
}
export default reducer;

