import { DESCREASE, RESET, INSCREASE } from "../Action";
const defaultState = {
    count: 27,
    name: 'quý'
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case DESCREASE:
            return { ...state, count: state.count - 1 };
        case INSCREASE:
            return { ...state, count: state.count + 1 };
        case RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }

}
export default reducer;