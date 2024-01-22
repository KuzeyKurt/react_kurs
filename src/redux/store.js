import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk" 
import collectionsReducer from "./reducers/collections-reducer"
import eventInfoReducer from "./reducers/eventInfo-reducer";
import ticketsReducer from "./reducers/tickets-reducer";
import articlesReducer from "./reducers/articles-reducer";
let reducers = combineReducers({
	collectionsPage: collectionsReducer,
	eventPage: eventInfoReducer,
	ticketsBlock: ticketsReducer,
	articlesPage: articlesReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;