import currentUser from './reducers/currentUser';
import thunk from 'redux-thunk';
import { saveState, loadState } from './localStorage';
import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(
	currentUser,
	persistedState,
	applyMiddleware(thunk)
);

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 1000));

export default store;