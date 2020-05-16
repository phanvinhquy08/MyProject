import { SET_LOADING, GET_HOTEL } from '../Action/actions'
const defaultState = {
    loading: false,
    listHotels: []
}

const reducer = (state = defaultState, action) => {
    if (action.type === SET_LOADING) {
        return { ...state, loading: true }
    }
    if (action.type === GET_HOTEL) {
        return { ...state, loading: false, listHotels: action.payload }
    }
    return state;
}
export default reducer;
