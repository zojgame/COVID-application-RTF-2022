import {applyMiddleware, combineReducers, createStore} from 'redux';
import {tokenReducer} from "./tokenReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userDataReducer} from "./userDataReducer";

const rootReducer=combineReducers({
    token:tokenReducer,
    userData:userDataReducer,
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;