import { SET_LOADING, GET_PRODUCT} from '../Action';

const defaultState = {
    loading: false,
    products: []
}

const reducer = (state = defaultState, action) => {
    if (action.type === SET_LOADING) {
        return {...state, loading: true}
    }
    if (action.type === GET_PRODUCT) {
        return {...state, loading:false, products: action.payload}
    }
    return state;
}
export default reducer;
