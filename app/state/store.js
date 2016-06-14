import thunk from 'redux-thunk';
import { saveState, loadState } from './localStorage';
import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import user from './reducers/user';

const persistedState = loadState();
const store = createStore(
	user,
	persistedState,
	applyMiddleware(thunk)
);

store.subscribe(throttle(() => {
	saveState(store.getState());
}, 1000));

export default store;