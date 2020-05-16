// count actions
export const DESCREASE = "DESCREASE";
export const RESET = "RESET";
export const INSCREASE = "INSCREASE";
// modal action
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';
// Product actions
export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCT = 'GET_PRODUCT';
// create action
const descrease = () => {
    return { type: DESCREASE }
}
const reset = () => {
    return { type: RESET }
}
const increase = () => {
    return { type: INSCREASE }
}
const modal_open = (name, text) => {
    return { type: MODAL_OPEN, payload: { name, text } }
}
const loading = () => {
    return { type: SET_LOADING };
}

const getProducts = () => async (dispatch) => {
    dispatch(loading());
    const res = await fetch("https://johnsmilgatutorials.com/projects/react-tech-store-v2/products");
    const data = await res.json();
    dispatch({ type: GET_PRODUCT, payload: data })
}

export { descrease, reset, increase, modal_open, loading, getProducts };

