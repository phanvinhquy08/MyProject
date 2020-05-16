import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import hotelReducer from './ListHotelsrReducer';
import dialogInfoReducer from './DialogInfoReducer';
import dialogDeleteReducer from './DialogDeleteReducer';
import dialogFormReducer from './DialogFormReducer'

const middleware = [thunk];


const store = createStore(combineReducers({
    hotelState : hotelReducer,
    dialogInfoState: dialogInfoReducer,
    dialogDeleteState: dialogDeleteReducer,
    dialogFormState: dialogFormReducer
}),composeWithDevTools(applyMiddleware(...middleware)));

export default store;
