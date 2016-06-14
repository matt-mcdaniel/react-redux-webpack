import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory} routes={routes}></Router>
			</Provider>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));