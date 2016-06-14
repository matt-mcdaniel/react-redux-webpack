import App from './components/App/App';
import Home from './components/Home/Home';
import UserContainer from './components/User/UserContainer';

// Configure "Plain" Routes
// Fixes HMR warning
// https://github.com/reactjs/react-router/blob/master/docs/guides/RouteConfiguration.md#configuration-with-plain-routes

export default {
	path: '/',
	component: App,
	indexRoute: { component: Home },
	childRoutes: [
		{
			path: '/home',
			component: Home
		},
		{
			path: '/user',
			component: UserContainer,
		}
	]
}