import {applyMiddleware, combineReducers, createStore} from 'redux';
import {tokenReducer} from "./tokenReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userDataReducer} from "./userDataReducer";
import {notesReducer} from "./notesReducer";

const rootReducer=combineReducers({
    token:tokenReducer,
    userData:userDataReducer,
    notes:notesReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;